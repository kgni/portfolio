export default {
	name: 'projects',
	title: 'Projects',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},

		{
			name: 'description',
			title: 'Description',
			type: 'string',
		},
		{
			name: 'projectLink',
			title: 'Project Link',
			type: 'string',
		},
		{
			name: 'codeLink',
			title: 'Code Link',
			type: 'string',
		},
		{
			name: 'imgUrl',
			title: 'ImageUrl',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'technologies',
			title: 'Technologies',
			type: 'array',
			of: [{ type: 'string' }],
			options: {
				list: [
					{ title: 'HTML', value: 'html' },
					{ title: 'CSS', value: 'css' },
					{ title: 'JavaScript', value: 'JavaScript' },
					{ title: 'React', value: 'react' },
					{ title: 'Sass', value: 'sass' },
					{ title: 'TailwindCSS', value: 'tailwindcss' },
					{ title: 'NodeJS', value: 'nodejs' },
					{ title: 'MongoDB', value: 'mongodb' },
					{ title: 'Express', value: 'express' },
					{ title: 'NextJS', value: 'nextjs' },
					{ title: 'GraphQL', value: 'graphql' },
					{ title: 'Jest', value: 'jest' },
				],
			},
		},

		{
			name: 'tags',
			title: 'Tags',
			type: 'array',
			of: [
				{
					name: 'tag',
					title: 'Tag',
					type: 'string',
				},
			],
		},
	],
};
