import Link from "next/link";
export default function Menu(data: { link1: any , link2: any , link3: any , link4: any , link5: any , title1: any , title2: any , title3: any , title4: any , title5: any}) {
  const { link1, link2, link3, link4, link5, title1, title2, title3, title4,
  title5 } = data;

  return (
    <div className="flex w-full flex-col items-center justify-center rounded-md bg-textField text-center text-2xl">
      <ul className="w-96">
        <li className="border-b border-b-neutral-300 py-2 px-4">
          <Link href={link1}>{title1}</Link>
        </li>
        <li className="border-b border-b-neutral-300 py-2">
          <Link href={link2}>{title2}</Link>
        </li>
        <li className="border-b border-b-neutral-300 py-2">
          <Link href={link3}>{title3}</Link>
        </li>
        <li className="border-b border-b-neutral-300 py-2">
          <Link href={link4}>{title4}</Link>
        </li>
        <li className="p-2">
          <Link href={link5}>{title5}</Link>
        </li>
      </ul>
    </div>
  );
}
