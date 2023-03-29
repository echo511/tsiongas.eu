type AnyProps = { [name: string]: any };

type AnchorProps = {
  id: string;
} & AnyProps;

const defineAnchor = (
  id: string,
  scrollLogicalPosition: ScrollLogicalPosition = "start",
  scrollBehavior: ScrollBehavior = "smooth",
) => {
  return defineComponent<AnchorProps>((props, ctx) => {
    const sanitizedProps = Object.entries(props)
      .filter(([name]) => name !== "id")
      .reduce((acc: AnyProps, [name, value]) => {
        acc[name] = value;
        return acc;
      }, {});

    sanitizedProps.id = id;
    const anchorProps = sanitizedProps as AnchorProps;

    return () =>
      h("div", anchorProps, ctx.slots?.default ? ctx.slots.default() : []);
  });
};

type AnchorComponent = ReturnType<typeof defineAnchor>;

type DefineAnchorsInput = {
  [id: string]: { scrollLogicalPosition: ScrollLogicalPosition };
} & {
  [id: number]: never; // Enforce that keys are strings!
};
type DefineAnchorsOutput<I extends DefineAnchorsInput> = {
  [id in keyof I & string]: AnchorComponent;
};
const defineAnchors = <I extends DefineAnchorsInput>(
  anchors: I,
): DefineAnchorsOutput<I> =>
  Object.fromEntries(
    Object.entries(anchors)
      .map(([id, { scrollLogicalPosition }]) => {
        return [id, defineAnchor(id, scrollLogicalPosition)];
      }),
  ) as DefineAnchorsOutput<I>;

const useScroll = <I extends DefineAnchorsOutput<DefineAnchorsInput>>(
  anchors: I,
) => ({
  toAnchor: (id: keyof I & string) => (event: Event) => {
    event.preventDefault();

    const element = document.getElementById(id);
    if (!element) {
      console.error(
        `Element with id ${id} not found! Update anchor or invoke scrollTo() with correct anchor id.`,
      );
      return;
    }

    // Create observer that will fire provided callback when element is visible in viewport => when scrolling is finished
    const observerFactory = (callback: (element: Element) => void) =>
      new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            callback(entry.target);
          }
        });
      }, {
        threshold: 1.0, // 1.0 = fully visible in viewport
      });

    // Update URL #hash after scroll is done!
    observerFactory((element) => window.location.hash = element.id).observe(
      element,
    );

    const scrollToPosition: ScrollLogicalPosition = id === "zajmy"
      ? "center"
      : "start";

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: scrollToPosition,
      inline: scrollToPosition,
    });
  },
});

export default <I extends DefineAnchorsInput>(anchorDefinitions: I) => {
  const anchors = defineAnchors(anchorDefinitions);
  return {
    anchors: defineAnchors(anchorDefinitions),
    scroll: useScroll(anchors),
  };
};
