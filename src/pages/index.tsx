import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />
      <UserInformation
        name={"Adayane Coutinho"}
        picture={"https://github.com/adayanecoutinho.png"}
        rating={3}
        description={"Vila Velha"}
      />

      <UserInformation
        name={"Luelka Carlla"}
        picture={"https://github.com/adayanecoutinho.png"}
        rating={3}
        description={"Vila Velha"}
      />

      <UserInformation
        name={"Akira"}
        picture={"https://github.com/hanashiro.png"}
        rating={3}
        description={"São Paulo"}
      />

      <UserInformation
        name={"Luiz"}
        picture={"https://github.com/adayanecoutinho.png"}
        rating={3}
        description={"Vitória"}
      />
    </div>
  );
}
