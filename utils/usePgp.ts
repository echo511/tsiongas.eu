import { createMessage, encrypt, readKey } from "openpgp"

const pgpPublicKeyArmored = `-----BEGIN PGP PUBLIC KEY BLOCK-----

mQENBFsT3oEBCADM0VJuppx949Uga0JZEWn1BPdCZ/X55+6VulJX2cleBVjMIz3r
mrG4G64O9TWzyEeX3CvqaeEda5l60cb3GJ4pYvxWN6OreBWFo4UKlm7dldXoickZ
TSl8vKFi9TnDs4EfHlQ1EYzY+gNmKgdl+usbWwE2jZSHMIapCPwL3feG2SNiy+l8
o37L6MkgfG8FGXcH2W1EZxIW0LDqng397qEIIhjsR7M/Ak1MRYBpGBqbp9w5xXkA
FZRpKLEhj4i7Iev88UQtyLxLhLtQxHzepBXc9rJ20qGLFRT0M/4pARjgkdy2GT7U
+XI+OsjUPEmH4iNfbM94U/z+Ei3C+8CrXFFbABEBAAG0Jk5pa29sYXMgVHNpb25n 
YXMgPG5pa29sYXNAdHNpb25nYXMuZXU+iQFOBBMBCAA4FiEEt7U3qbBCeR+KJCF8
yyFJ01zt0UsFAlsT3oECGwMFCwkIBwIGFQoJCAsCBBYCAwECHgECF4AACgkQyyFJ
01zt0Ut9fwf9HyebAURmPdkAgQwpNwzPedtG4Q2uQSgAYlGGScFD15Prjv2TFm7c
fp10DDTnJ6sD7HesMNt9lPCGosz7v4yKNa+aow4tcEf8pyT/Z1lOP24hTTgfZmHr
zMaQn6p+vbW4VnvpptirP2VOPU9CazNbK0RabEcKtWq6lGXaJ9ySfjlL1tNWKu1G
LggoCoK1ioPShXemCZx1hE4wwHBCPuoPtz/Q0mP8V72iTSoTQn5imrhELZREMxin
2Us3bqk939i+cF9FCaL+N+VNyujt0GVkgMGDfupq6Vumbby5Nt34iF/JcKdfujqD
WCdZMkZGMpQuu0XJk8bPopDLb0WD+yPaobkBDQRbE96BAQgA2lYxZemGAMn2mkDp
3GfdCRRXpW4x3bPkDU4I6nhkIpIxR8E556C5/BbU8MMPt1C89/qWJqz0rxCAsSny
d9vl0VVSvNYV+ENnom3MUKbd5aPbNzkAt/aXlAFpBBAQrX5GvgTmC0Nz/SuMNAZj
6KikjCn2+L+3wEVdVH/Zi7nOPTSBkIOOcRDVb74GX69MMBqBTr5VhPRG5KH8enCE
QJPIlRxMtZ91XbHXlFb6ES9mWn6oVKyfoag9WPUIpFhoZ5rcSNBfWliehrSZijjf
zr8zi05Rnj+/MqR633LrkOChEWJr2rqcsXG75a1v4yXKmt9Xa4aQyJhgpcWUAq0Z
E1PaawARAQABiQE2BBgBCAAgFiEEt7U3qbBCeR+KJCF8yyFJ01zt0UsFAlsT3oEC
GwwACgkQyyFJ01zt0UsX8gf/fQ1rDv4s9i01pzJGWsVRY3Wdpt6kCJ4d7kGEAmLr
IfNJHEaGl0YGrlKxUOuWnCELbsHbAZHvJOdTgH6z5z5eU239mY4qv7FLSRAoYaAp
0pGGUwUKOzb/vL5Ynqk1ue42xMOYbTvIW5z+kS1Z3qsqKEeB0AyI9v+WWigzcCMF
yi2Bt4CVwYcAi7XOA1FAvka7PzVOWITA/3aadr6eCBPlwvRfmDWG/kHx2ArtHczf
k3UGAkesKdToMSAFHsHhl4VNIqB09lodgAsaxPNj1/LT8xGRlrxiw0q3uSg19y0r
ZSMm6Bb4RtcmsoBvTDgiriVCbQGCmur4uuiNDDr8D13y4g==
=NU7u
-----END PGP PUBLIC KEY BLOCK-----`;

const encryptFn = async function (message: string): Promise<string> {
    const encrypted = await encrypt({
        message: await createMessage({ text: message }),
        encryptionKeys: await readKey({ armoredKey: pgpPublicKeyArmored })
    })

    return String(encrypted)
}

export default {
    encrypt: encryptFn,
}
