export const LINK_GRAPHQL_FIELDS = `
	type: __typename
	title
	url
	openNewPage
`

export const IMAGE_GRAPHQL_FIELDS = `
	title
	description
	contentType
	fileName
	size
	url
	width
	height
`

export const HEADER_GRAPHQL_FIELDS = `
	type: __typename
	linksCollection ( limit : 5 ) {
		items {
			... on Link {
				${ LINK_GRAPHQL_FIELDS }
			}
		}
	}
`

export const HERO_GRAPHQL_FIELDS = `
	type: __typename
	title
	description
	image {
		${ IMAGE_GRAPHQL_FIELDS }
	}
	cta {
		${ LINK_GRAPHQL_FIELDS }
	}
`

export const PAGE_GRAPHQL_FIELDS = `
	title
	slug
	header {
		${ HEADER_GRAPHQL_FIELDS }
	}
	contentBlocksCollection ( limit : 5 ) {
		items {
			... on Hero {
				${ HERO_GRAPHQL_FIELDS }
			}
		}
	}
`