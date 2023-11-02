import * as Icon from "@/components/assets/icons";

function OurClients() {
  return (
    <section id="clients" className="container py-10">
      <h1 className="text-center">our clients</h1>

      <main className="mt-12 flex flex-col items-center gap-16">
        <div className="flex gap-[120px]">
          <Icon.Adobe className=" text-white" />
          <Icon.GitLab className="text-white" />
          <Icon.ProductBoard className="text-white" />
          <Icon.Adobe className="text-white" />
        </div>
        <div className="flex gap-[90px]">
          <Icon.AirWallex className="text-white" />
          <Icon.Adobe className="text-white" />
          <Icon.GitLab className="text-white" />
        </div>

        <Icon.AirWallex className="text-white" />
      </main>
    </section>
  );
}

export default OurClients;
