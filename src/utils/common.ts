export const importModule = async (pathFile: string): Promise<any> => {
  const module = await import(pathFile)
  return module
}

export const requireFromString = (code: string, filename: string): any => {
  const Module = require('module')
  var m = new Module()
  m.paths = module.paths
  m._compile(code, filename)
  return m.exports
}
