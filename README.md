example of a panda monorepo usage with a consuming app and multiple ui-lib providers

was asked here https://discord.com/channels/1118988919804010566/1118988920533823540/1120270002352836648

```md
my-monorepo
├─ apps
│  ├─ web <-- consuming the `preset`, `button`, `some-component`, etc packages
│  ├─ storybook
├─ packages
│  ├─ preset <-- using definePreset(), contains the theme base (tokens.colors, semantic tokens, etc)
│  └─ button <-- consuming the preset, provides a button recipe (in a buttonPreset) + a ShadcnButton component
│  └─ some-component <-- consuming the preset, provides a component using internal `css` calls, ships a panda.json extract result
```

for storybook, you can run `pnpm storybook build && npx serve storybook-static`