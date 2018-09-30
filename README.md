# array-object-dictionary

A simple NPM package to map an array of objects to an object of unique values.

## Usage

> npm i -P @cryptoscamdb/array-object-dictionary

## Example

```typescript
import dictionary from '@cryptoscamdb/array-object-dictionary';

const cats = [
    {
        name: 'Kitty',
	    age: 4
    },
    {
        name: 'Tiger',
	    age: 4
    },
    {
        name: 'Misty',
	    age: 6
    }
];

console.log(dictionary(cats));
```

Which will output the following dictionary object:

```
{
    name: {
        Kitty: [
            {
                name: 'Kitty',
                age: 4
            }
        ],
        Tiger: [
            {
                name: 'Tiger',
                age: 4
            }
        ],
        Misty: [
            {
                name: 'Misty',
                age: 6
            }
        ]
    },
    age: {
        4: [
            {
                name: 'Kitty',
                age: 4
            },
            {
                name: 'Tiger',
                age: 4
            }
        ],
        6: [
            {
                name: 'Misty',
                age: 6
            }
        ]
    }
};
```

Notice how both Kitty and Tiger share the same age (4), and that's also how they're mapped in the dictionary.
