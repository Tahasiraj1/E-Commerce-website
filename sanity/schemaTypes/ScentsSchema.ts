import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'scents',
  title: 'Scents',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'string',
      description: 'A unique identifier for the product.',
    }),
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      description: 'The name of the product.',
    }),
    defineField({
      name: 'quantity',
      title: 'Quantity',
      type: 'number',
      description: 'The available quantity of the product.',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'The price of the product.',
    }),
    defineField({
      name: 'image',
      title: 'Product Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      description: 'Images of the product.',
    }),
    defineField({
      name: 'ratings',
      title: 'Ratings',
      type: 'string',
      description: 'The average ratings of the product (e.g., "5.0").',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Tags to categorize the product (e.g., "Best Selling").',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A detailed description of the product.',
    }),
  ],
});