# live-region-element

> A custom element for accessible live region announcements

## Getting Started

To install `live-region-element` in your project, you will need to run the following
command using [npm](https://www.npmjs.com/):

```bash
npm install -S live-region-element
```

If you prefer [Yarn](https://yarnpkg.com/en/), use the following command
instead:

```bash
yarn add live-region-element
```

## Usage

The `live-region-element` package provides two entrypoints for you to use:

- `live-region-element` which exports the `LiveRegionElement` custom element,
  along with types, for you to use and register manually
- `live-region-element/define` which will register the `LiveRegionElement` as
  `live-region` which can be used directly in your HTML

The `<live-region>` element supports two methods: `announce()` and
`announceFromElement`().

```tsx
const liveRegion = document.querySelector('live-region');

// Announce a message, by default this is a "polite" announcement
liveRegion.announce('Example message');

// Announce a message with an "assertive" politeness level
liveRegion.announce('Example assertive message', {
  politeness: 'assertive',
});

// Announce a message from th e contents of an element
const element = document.querySelector('example-element');
liveRegion.announceFromElement(exampleElement);
```

## 🙌 Contributing

We're always looking for contributors to help us fix bugs, build new features,
or help us improve the project documentation. If you're interested, definitely
check out our [Contributing Guide](/.github/CONTRIBUTING.md)! 👀

## 📝 License

Licensed under the [MIT License](/LICENSE).
