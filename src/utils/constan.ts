export type Fabric = {
  name: string
  unicode: string
}
export const convertStringFa = (inputString: string) => {
  const words = inputString.split(' ')
  return words[1].replace('fa', words[0])
}
