https://discord.com/channels/1118988919804010566/1118988920533823540/1120270002352836648

```md
my-monorepo
├─ apps
│  ├─ web <-- consuming the `button`, `checkbox`, etc packages
│  └─ docs
├─ packages
│  ├─ preset <-- using definePreset()
│  └─ button <-- consuming the preset with some additional logic for Button
│  └─ dialog <-- consuming the preset with some additional logic for Dialog
│  └─ checkbox <-- consuming the preset with some additional logic for Checkbox
```