import Image from "next/image";
import ContentCollection from "@/app/utility/content-collection";
import { draftMode } from "next/headers";
import { getPageData } from '@/lib/api';
import { ResultObj } from "@/app/utility/types";

export default async function Page() {

	const { isEnabled } = await draftMode();
	const results = await getPageData( isEnabled, '/' );
	const contentCollection = results?.contentBlocksCollection?.items;

	return (
		<>
			{ results?.contentBlocksCollection.items.length &&
				contentCollection.map ( ( i : ResultObj, key : number ) => {
					return (
						<ContentCollection key={ key }
							{
								...{
									result : i,
									type : i.type
								}
							}
						/>
					)
				}) 
			}
		</>
	);
}
