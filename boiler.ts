import { ActionBoiler } from "boiler-dev"

export const generate: ActionBoiler = async () => {
  const actions = []

  actions.push({
    action: "write",
    path: "src/loaded.ts",
    sourcePath: "tsignore/loaded.ts",
  })

  actions.push({
    action: "write",
    path: "test/loaded.spec.ts",
    sourcePath: "tsignore/loaded.spec.ts",
  })

  return actions
}
