import { addTemplate, createResolver, defineNuxtModule } from "nuxt/kit";
import fs from "fs";
import sizeOf from "image-size";
import path from "path";

type Image = {
  filename: string;
  width: number;
  height: number;
};

const createMap = (folderPath: string) => {
  const images = fs.readdirSync(folderPath);

  return images.map((image): Image => {
    const imagePath = path.join(folderPath, image);
    const dimensions = sizeOf(imagePath);

    const width = dimensions.width ?? 0;
    const height = dimensions.height ?? 0;

    return {
      filename: image,
      width: width,
      height: height,
    };
  });
};

const convertMapToTemplate = (images: Image[]) => {
    return `
export type Image = {
  filename: string;
  width: number;
  height: number;
};

export type Galleries = Image[];

export const useGalleries = () => {
    return ${JSON.stringify(images)};
}
`
};

export default defineNuxtModule({
  meta: {
    name: "Gallery",
  },
  setup(moduleOptions, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    const dst = resolve(nuxt.options.buildDir, 'gallery-module.ts');

    const path = nuxt.options.rootDir + "/public/galleries/2023_France"; // TODO Support subgaleries.
    const images = createMap(path);

    const getContents = () => convertMapToTemplate(images)

    nuxt.hooks.hook("app:templates", ({ templates }) => {
      templates.push({
        dst,
        filename: "gallery-module.ts",
        getContents,
        write: true,
      });
    });

    nuxt.hooks.hook("imports:extend", (imports) => {
        imports.push({
            name: 'useGalleries',
            as: 'useGalleries',
            from: dst,
        })
    })
  },
});
