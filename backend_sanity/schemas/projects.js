export default {
	name: 'projects',
	title: 'Projects',
	type: 'document',

	sortable: true,
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
					{
						title: 'HTML',
						value: 'HTML',
					},
					{ title: 'CSS', value: 'CSS' },
					{ title: 'JavaScript', value: 'JavaScript' },
					{ title: 'React', value: 'React' },
					{ title: 'NextJS', value: 'Next.js' },
					{ title: 'Sass', value: 'Sass' },
					{ title: 'TailwindCSS', value: 'TailwindCSS' },
					{ title: 'Node.js', value: 'Node.js' },
					{ title: 'Express', value: 'Express' },
					{ title: 'MongoDB', value: 'MongoDB' },
					{ title: 'GraphQL', value: 'GraphQL' },
					{ title: 'Jest', value: 'Jest' },
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

	orderings: [
		{
			title: 'Release Date, New',
			name: 'releaseDateDesc',
			by: [{ field: 'releaseDate', direction: 'desc' }],
		},
	],
};
