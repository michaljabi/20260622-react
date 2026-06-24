import { ArrowBigLeft } from "lucide-react";
import { Button } from "../shared/Button";
import { useLocation, useNavigate } from "react-router";

// Nasz własny hook dla 404

function useNaviAndPath() {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    return { 

        // STARE API:
        // pathname: pathname, 
        // navigate: navigate

        // po 2015r. obowiązuje tzw. Object property shorthand (jeśli nazwa property obiektu === nazwa indentifier, który chcesz użyć)
        // to możesz skrócić do:
        pathname,
        navigate
    }
}


export function NotFound404() {
  //const { pathname } = useLocation();
  //const navigate = useNavigate();
  const {pathname, navigate} = useNaviAndPath();

  // Więcej przydatnych hooków:
  // https://usehooks-ts.com/
  // Tarakutj jako "hook" util library (coś potrzebujesz, nie robisz ręcznie, tylko korzystasz z lib)

  // Musimy pamiętać o "regułach" wywoływania hooków:
  // https://react.dev/reference/rules/rules-of-hooks

  return (
    <section>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          Page not found <code>404</code>
        </h1>
        <p className="text-sm text-zinc-500">
          The page{" "}
          <span className=" bg-zinc-500 text-zinc-200 py-1 px-3 rounded-2xl">
            {pathname}
          </span>{" "}
          was not found!
        </p>
        <div className="p-3 flex justify-center mt-4">
          <Button onPress={() => navigate("/")}>
            <div className="flex items-center gap-2 p-2">
              <ArrowBigLeft /> Go back home
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
}
