import * as Icon from "@/components/assets/icons";

const iconStyle = "w-[110px] sm:w-[140px] xl:w-[200px] text-white";

function OurClients() {
  return (
    <section id="clients" className="container py-10">
      <h1 className="text-center">our clients</h1>

      <main className="mt-10 sm:mt-16 flex flex-col items-center gap-y-10 lg:gap-y-16">
        <div className="flex justify-center flex-wrap gap-x-[40px] sm:gap-x-[120px] gap-y-8">
          <Icon.Adobe className={iconStyle} />
          <Icon.GitLab className={iconStyle} />
          <Icon.Adobe className={iconStyle} />
          <Icon.ProductBoard
            className={iconStyle + " !w-[180px] sm:!w-[220px] lg:!w-[260px]"}
          />
        </div>
        <div className="flex flex-wrap justify-center gap-x-[40px] gap-y-8  sm:gap-x-[90px]">
          <Icon.AirWallex
            className={iconStyle + " !w-[160px] sm:!w-[180px] lg:!w-[210px]"}
          />
          <Icon.Adobe className={iconStyle} />
          <Icon.GitLab className={iconStyle} />

          <Icon.AirWallex
            className={
              iconStyle + " md:hidden !w-[160px] sm:!w-[180px] lg:!w-[210px]"
            }
          />
        </div>

        <Icon.AirWallex
          className={
            iconStyle +
            " hidden md:block !w-[160px] sm:!w-[180px] lg:!w-[210px]"
          }
        />
      </main>
    </section>
  );
}

export default OurClients;
