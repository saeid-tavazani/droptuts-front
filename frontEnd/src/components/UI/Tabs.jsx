import Body from "./tabs/Body";
import Button from "./tabs/Button";
export default function Tabs({ data }) {
  return (
    <>
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex gap-2" aria-label="Tabs" role="tablist">
          {data.map(({ tabs }, index) => (
            <Button index={index} key={index}>
              {tabs}
            </Button>
          ))}
        </nav>
      </div>
      <div className="mt-3">
        {data.map(({ body }, index) => (
          <Body visibility={index == 1} index={index} key={index}>
            {body}
          </Body>
        ))}
      </div>
    </>
  );
}
