import Link from "next/link";
import { Eye, View } from "lucide-react";

type Project = {
	slug: string;
	date?: string;
	title: string;
	description: string;
	published?: boolean;
	url?: string;
	repository?: string;
};

type Props = {
	project: Project;
	views: number;
};

export const Article: React.FC<Props> = ({ project, views }) => {
	return (
		<Link href={`/work/${project.slug}`}>
			<article className="p-4 sm:p-6 md:p-8">
				<div className="flex justify-between gap-2 items-center">
					<span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
						{project.date ? (
							<time dateTime={new Date(project.date).toISOString()}>
								{Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
									new Date(project.date),
								)}
							</time>
						) : (
							<span>SOON</span>
						)}
					</span>
					<span className="text-zinc-500 text-xs flex items-center gap-1">
						<Eye className="w-3 h-3 sm:w-4 sm:h-4" />{" "}
						{Intl.NumberFormat("en-US", { notation: "compact" }).format(views)}
					</span>
				</div>
				<h2 className="z-20 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium duration-1000 text-zinc-200 group-hover:text-white font-display">
					{project.title}
				</h2>
				<p className="z-20 mt-3 sm:mt-4 text-xs sm:text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
					{project.description}
				</p>
			</article>
		</Link>
	);
};
