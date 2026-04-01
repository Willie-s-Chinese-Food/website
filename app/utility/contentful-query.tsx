export const HERO_GRAPHQL_FIELDS = `
	type: __typename
	title
	description
`

export const PAGE_GRAPHQL_FIELDS = `
	title
	slug
	contentBlocksCollection ( limit : 5 ) {
		items {
			... on Hero {
				${ HERO_GRAPHQL_FIELDS }
			}
		}
	}
`