import { supabase } from "../lib/supabase";

export default async function Services() {

  const { data, error } = await supabase
    .from("services")
    .select("*");

  const { data: test } = await supabase
    .rpc("version");

  return (
    <div>

      <h1>Services</h1>

      <pre>
        {JSON.stringify(
          {data, error},
          null,
          2
        )}
      </pre>

    </div>
  );
}