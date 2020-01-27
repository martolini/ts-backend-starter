type Foo = {
  bar: string;
};

const foo: Foo = { bar: 'baz' };

const getFoo = () => foo;

export default getFoo;
export const baz = 3;
