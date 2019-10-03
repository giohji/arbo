import { Injectable } from '@angular/core';
import { Detail, DetailType } from './detail.model';

@Injectable()
export class DetailService {
  items:Array<Detail> = [
    new Detail({
      key: "karina",
      menuTitle: "Dra. Karina Lika Hoshino Yamanaka",
      type: DetailType.TEAM,
      image: "/assets/karina.jpg",
      title: "Dra. Karina Lika Hoshino Yamanaka – CRO/SP 87008",
      description:[
        "Imersão em Bichectomia pela Mazzter Odonto Learning",
        "Especialista em Cirurgia e Traumatologia Bucomaxilofacial pela Universidade São Marcos",
        "Especialista em Implantodontia pela Universidade São Marcos",
        "Aperfeiçoamento em Odontologia Restauradora e Estética pela ACDC",
        "Curso de extensão em Cirurgia Bucomaxilofacial pela UNICAMP",
        "Graduada em Odontologia pela UNICAMP"
      ]
    }),
    new Detail({
      key: "carolina",
      menuTitle: "Dra. Carolina Gati",
      type: DetailType.TEAM,
      image: "/assets/carolina.jpg",
      title: "Dra. Carolina Gati – CRO /SP 80234",
      description:[
        "Imersão em Bichectomia pela Mazzter Odonto Learning",
        "Mestrado em Radiologia e Diagnóstico Estomatológico pela São Leopoldo Mandic",
        "Especialização em Cirurgia e Traumatologia Bucomaxilofacial pela São Leopoldo Mandic",
        "Curso de Aperfeiçoamento em Cirurgia Bucal e Terapêutica Medicamentosa pela ACDC",
        "Curso de Aperfeiçoamento em Implantodontia pela ACDC",
        "Curso de especialização em Hipnose Ericsoniana pelo Instituto Milton Erickson de Campinas",
        "Graduada em Odontologia pela Universidade São Francisco (Bragança Paulista)"
      ]
    }),
    new Detail({
      key: "giovanna",
      menuTitle: "Dra.Giovanna Marretto Fusatto dos Santos",
      type: DetailType.TEAM,
      image: "/assets/giovanna.jpg",
      title: "Dra.Giovanna Marretto Fusatto dos Santos – CRO/SP 68792",
      description:[
        "Curso de Biótipo Periodontal com o Professor Sérgio Khan",
        "Especialização de Periodontia pela São Leopoldo Mandic",
        "Aperfeiçoamento de Periodontia pela ACDC",
        "Aperfeiçoamento em Ortodontia pela ACDC",
        "Graduada em Odontologia pela Universidade São Francisco (Bragança Paulista)"
      ]
    }),
    new Detail({
      key: "naoko",
      menuTitle: "Dra Naoko Yamashita",
      type: DetailType.TEAM,
      image: "/assets/naoko.jpg",
      title: "Dra Naoko Yamashita – CRO/SP 40960",
      description:[
        "Aperfeiçoamento em Endodontia pela ACDC",
        "Aperfeiçoamento em Odontologia Restauradora e Estética pela ACDC",
        "Aperfeiçoamento em Dentística pela Tokyo Medical and Dental University",
        "Graduada em Odontologia pela UNESP São José dos Campos"
      ]
    }),
    new Detail({
      key: "profilaxia",
      menuTitle: "Profilaxia e Programa de prevenção",
      type: DetailType.TREATMENT,
      //image: "/assets/profilaxia.jpg",
      title: "Profilaxia e Programa de prevenção",
      description:[
        "Todo o tratamento é iniciado com uma profilaxia, que consiste em uma limpeza profissional, na qual removemos tártaros, manchas e fazemos polimento dos dentes.",
        "No Programa de Prevenção fazemos uma avaliação minunciosa a cada 3 ou 6 meses, com o objetivo de evitar Cáries e inflamações na gengiva (Gengivite).",
        "Manter uma gengiva saudável é importante para evitar endocardite bacteriana, infecções renais e pulmonares, além de outras patologias que usam a gengiva doente como porta de entrada no organismo."
      ]
    }),
    new Detail({
      key: "periodontia",
      menuTitle: "Periodontia",
      type: DetailType.TREATMENT,
      //image: "/assets/periodontia.jpg",
      title: "Periodontia",
      description:[
        "Quando a gengiva fica com uma cor avermelhada escura e começa a sangrar ao passar o fio dental ou até mesmo a escova, mau hálito ou gosto ruim na boca são sinais de alerta que indicam que alguma infecção e inflamação está presente.",
        "Quando essa infecção não é tratada de forma eficiente esta pode evoluir e passa a apresentar uma forma crônica a chamada periodontite.",
        "A periodontite além de causar inflamação na gengiva ela começa a causar perda óssea, ou seja, os dentes começam a perder sustentação e podem começar a ter mobilidade. Um dos agravantes dessa doença é que ela é silenciosa, na maioria das vezes ela não apresenta nenhuma sintomatologia dolorosa.",
        "É importante salientar que esse tipo de infecção na boca pode agravar o quadro de saúde geral causando descompensação da diabetes, aumento no risco de problemas cardíacos e respiratórios, parto prematuro, entre outras efermidades.",
        "O tratamento é realizado por um especialista que irá remover a placa bacteriana, que é o causador de toda essa infecção, através de técnicas minimamente invasivas. Ele irá orientar você como evitar que essa doença retorne e fará um acompanhamento regular do seu quadro clínico."
      ]
    }),
    new Detail({
      key: "endodontia",
      menuTitle: "Endodontia",
      type: DetailType.TREATMENT,
      //image: "/assets/endodontia.jpg",
      title: "Endodontia",
      description:[
        "Área da odontologia que trata doenças relacionadas a polpa do dente quando acometido por cáries extensas ou traumas.",
        "Os sintomas geralmente são dor intensa, inchaço e as alterações também podem ser encontradas através de exames radiográficos.",
        "O tratamento consiste na limpeza, preparo, desinfecção  do canal e obturação para devolver a função ao dente.",
        "Atualmente, equipamentos de tecnologia de ponta como reciprocantes e rotatórios são muito eficientes no tratamento de canal, trazendo rapidez e efetividade."
      ]
    }),
    new Detail({
      key: "biopsia_bucal",
      menuTitle: "Biópsia Bucal",
      type: DetailType.TREATMENT,
      //image: "/assets/biopsiabucal.jpg",
      title: "Biópsia Bucal",
      description:[
        "Toda lesão, ferida ou mancha que surgir na boca e persistir por mais de 15 dias é interessante realizar acompanhamento podendo ser necessário realizar a biópsia.",
        "Esse procedimento consiste em remover uma amostra ou toda a lesão visando determinar a natureza e o grau da lesão estudada.",
        "Trata-se de um procedimento simples, rápido e indolor. O material coletado será enviado para um laboratório especializado em Patologia."
      ]
    }),
    new Detail({
      key: "enxerto_osseo",
      menuTitle: "Enxerto Ósseo",
      type: DetailType.TREATMENT,
      //image: "/assets/enxerto_osseo.jpg",
      title: "Enxerto Ósseo",
      description:[
        "O enxerto ósseo é indicado para os pacientes que apresentam perda óssea e buscam por um implante dentário. O enxerto ósseo é o procedimento no qual tecido ósseo (em pó ou em bloco) é depositado no local desejado, e após alguns meses o osso enxertado se incorpore no osso que já estava no nosso corpo, deixando aquela região mais volumosa, tornando assim o local apto para colocação de implantes dentários.",
        "Hoje temos a disposição, diversas técnicas e materiais que facilitam e garantem a segurança em casos de cirurgia de enxertia óssea. Trabalhamos com enxertos sintéticos, e técnicas que nos permitem usar o osso do próprio paciente, sem maiores complicações e sem risco de rejeição."
      ]
    }),
    new Detail({
      key: "implantes",
      menuTitle: "Implantes",
      type: DetailType.TREATMENT,
      //image: "/assets/implantes.jpg",
      title: "Implantes",
      description:[
        "Para quem vive com falta de um ou mais dentes, o efeito cosmético de um implante dentário é extremamente positivo. Os implantes dentários funcionam e têm a mesma aparência de um dente normal.",
        "O tratamento com o implante dentário é composto por duas partes: primeiro um pino metálico feito de titânio é posicionado cirurgicamente no osso do maxilar e funciona como a raiz do dente. Num segundo momento, uma coroa é confeccionada e posicionada sobre o implante instalado.",
        "Para o sucesso de um implante, deve-se ter gengivas saudáveis e os ossos adequados para sustentar o implante. Se o seu osso for muito fino ou suave e inadequado para suportar um implante, você pode precisar de um enxerto ósseo previamente."
      ]
    }),
    new Detail({
      key: "remocao_dos_terceiros_molares",
      menuTitle: "Remoção dos Terceiros Molares",
      type: DetailType.TREATMENT,
      //image: "/assets/remocao_dos_terceiros_molares.jpg",
      title: "Remoção dos Terceiros Molares",
      description:[
        "Hoje em dia é muito difícil as pessoas terem espaço para o nascimento do terceiro molar ou então conhecido \"dente do Juízo\". Sendo assim é muito comum os dentes nascerem apenas pela metade ou simplesmente não aparecerem na boca.",
        "Quando isso acontece, é importante que o caso seja avaliado, pois a falta de erupção desse dente pode ocasionar sérias infecções no futuro ou até mesmo prejudicar um dente vizinho a ele.",
        "A melhor idade para remoção dos terceiros molares é na faixa dos 16 anos de idade, quando normalmente o dente tem apenas 2/3 da raiz formada. Mas se você já passou dessa idade, isso não é problema para os nossos especialistas.",
        "Marque uma avaliação que tiraremos todas as suas dúvidas."
      ]
    }),
    new Detail({
      key: "bichectomia",
      menuTitle: "Bichectomia",
      type: DetailType.TREATMENT,
      //image: "/assets/bichectomia.jpg",
      title: "Bichectomia",
      description:[
        "É uma cirurgia na qual removemos um corpúsculo denominado \"Bola de Bichat\" que consiste em uma gordura que fica armazenada na região da bochecha. A remoção dessa gordura causa um afinamento na parte inferior do rosto, dando aquele \"efeito blush\", ou seja, as maçãs do rosto ficam mais proeminentes e o rosto fica mais fino.",
        "A bichectomia, além de sua função estética, é também indicada para as pessoas que costumam morder com frequência a parte interna das bochechas.",
        "A cirurgia é rápida e indolor. Os resultados começam a serem visualizados 15 dias após realizado o procedimento."
      ]
    }),
    new Detail({
      key: "clareamento_dentario",
      menuTitle: "Clareamento dentário",
      type: DetailType.TREATMENT,
      //image: "/assets/clareamento_dentario.jpg",
      title: "Clareamento dentário",
      description:[
        "Um sorriso bonito e atraente caracteriza uma pessoa positivamente. Ter os dentes mais brancos transmite beleza, saúde e bem-estar.",
        "O clareamento dental é um procedimento rápido e bastante efetivo, não é invasivo, não enfraquece os dentes, e nem altera a estrutura do dente. É efetivo na remoção da maioria das manchas, clareia os dentes, e mantem a limpeza e o aspecto saudável do sorriso por mais tempo.",
        "O clareamento caseiro é realizado com finas moldeiras de silicone carregadas com o gel clareador e tem que ser aplicado todos os dias durante três a quatro semanas ou de acordo com a orientação do dentista. Inúmeros casos mostram que o procedimento caseiro pode produzir os melhores resultados a longo prazo.",
        "O clareamento em consultório é feito com um gel em concentração maior de ativo clareador. Ele traz efeitos de forma mais rápida podendo levar de 1 a 3 sessões para obter o resultado esperado, isso vai depender do grau de manchas nos dentes."
      ]
    }),
    new Detail({
      key: "facetas_e_lentes_de_contato",
      menuTitle: "Facetas e Lentes de Contato",
      type: DetailType.TREATMENT,
      //image: "/assets/facetas_e_lentes_de_contato.jpg",
      title: "Facetas e Lentes de Contato",
      description:[
        "São fragmentos de porcelana que permitem mudar o formato dos dentes promovendo um sorriso mais harmônico.",
        "A diferença da faceta e das lentes de contato, é que esta última é realizada sem desgaste ou com um desgaste mínimo dos dentes. Por isso é necessária uma avaliação detalhada para assim escolhermos a melhor indicação para cada caso."
      ]
    }),
    new Detail({
      key: "plastica_gengival",
      menuTitle: "Plástica Gengival",
      type: DetailType.TREATMENT,
      //image: "/assets/plastica_gengival.jpg",
      title: "Plástica Gengival",
      description:[
        "Quando a gengiva avança sobre os dentes, dando a impressão de dentes curtos e pequenos ou então quando acontece o inverso: a gengiva recua deixando a raiz exposta, muitas vezes causando a sensibilidade ao frio e quente. A solução é a plástica gengival.",
        "Trata-se de uma microcirurgia no qual o planejamento deve ser feito após um controle da higienização. Os resultados são visíveis após 1 semana."
      ]
    }),
    new Detail({
      key: "protese_dentaria",
      menuTitle: "Prótese Dentária",
      type: DetailType.TREATMENT,
      //image: "/assets/protese_dentaria.jpg",
      title: "Prótese Dentária",
      description:[
        "Especialidade odontológica que visa substituir dentes perdidos. A perda de dentes pode ocasionar diversos problemas como: dificuldade mastigatória, problemas gástricos, dor na articulação Têmporo Mandibular, dores de cabeça, entre outras.",
        "As próteses podem ser fixas, removíveis ou totais, cada uma com suas indicações específicas.",
        "Nossos profissionais avaliarão a melhor solução para cada caso clínico."
      ]
    }),
    new Detail({
      key: "restauracao_dentaria",
      menuTitle: "Restauração Dentária",
      type: DetailType.TREATMENT,
      //image: "/assets/restauracao_dentaria.jpg",
      title: "Restauração Dentária",
      description:[
        "O nome restauração, remete a volta do dente a forma original e a função.",
        "Quando o dente é acometido por cárie ou trauma, remove -se a área comprometida e preenche -se com material restaurador adequado ao caso.",
        "Atualmente, existem diversos materiais restauradores e a indicação será feita caso a caso por nossos profissionais especializados.",
        "Nosso objetivo é exatamente, promover saúde através de mastigação adequada, estética desejada e com isso ter a felicidade e auto estima do paciente."
      ]
    }),
    new Detail({
      key: "programa_para_gestantes",
      menuTitle: "Programa para Gestantes",
      type: DetailType.TREATMENT,
      //image: "/assets/programa_para_gestantes.jpg",
      title: "Programa para Gestantes",
      description:[
        "Futuras mamães ou você que ainda está pensando em engravidar recomendamos a você este programa que irá tirar todas as suas dúvidas com relação a sua saúde bucal durante a gestação, além de garantir um tratamento seguro para você e seu bebê.",
        "Durante a Gravidez, ocorrem várias mudanças no metabolismo do corpo da mulher, entre elas temos as alterações hormonais que podem causar enrijecimento ou inflamação da Gengiva.",
        "É importante o acompanhamento da saúde bucal da gestante, pois já foi comprovado cientificamente que infecções dentárias aumentam o risco de parto prematuro, quadros de pré-eclâmpsia e baixo peso do bebê."
      ]
    }),
    new Detail({
      key: "programa_para_melhor_idade",
      menuTitle: "Programa para a Melhor Idade",
      type: DetailType.TREATMENT,
      //image: "/assets/programa_para_melhor_idade.jpg",
      title: "Programa para a Melhor Idade",
      description:[
        "Nesse programa você passará por avaliação e acompanhamento de especialistas a cada 3 meses. Afinal, alguns problemas frequentes nessa fase são doenças periodontais, \"boca seca\" que costumam estar associados ao uso rotineiro de medicamentos e a outras condições sistêmicas frequentemente encontradas na 3ª idade, como a diabetes e a menopausa.",
        "A ausência de dente, acarreta prejuízos à mastigação, e por consequência, podem levar à desnutrição e à má digestão. Também pode levar a fratura de dentes remanescentes devido as sobrecarga e disfunções na ATM. Seu dentista pode ajudar você a enfrentar esses desafios.",
        "Tratamento clinico, periodontal e reabilitação protética devolve sua saúde bucal e auto estima."
      ]
    }),
    new Detail({
      key: "programa_teen",
      menuTitle: "Programa Teen",
      type: DetailType.TREATMENT,
      //image: "/assets/programa_teen.jpg",
      title: "Programa Teen",
      description:[
        "Balas, chicletes e refrigerantes são frequente no dia-a-dia dos jovens. Com isso vem a preocupação com a saúde bucal dos jovens, que normalmente não tem muita paciência em passar o fio dental, ainda mais quando usam aparelho fixo.",
        "Com esse programa ajudamos os pais a orientar e ver de perto como está a higiene bucal do seu filho, e assim evitarmos as temidas cáries, erosões dentárias e gengivite.",
        "Avaliaremos o seu filho e proporcionaremos a ele um programa que melhor enquadre ao perfil dele."
      ]
    })
  ] 
   constructor() { }
   getDetail(key: string) {
     return this.items.find(d => d.key == key);
   }
   getTeamItems() {
     return this.items.filter(d => d.type == DetailType.TEAM);
   }
   getTreatmentItems() {
    return this.items.filter(d => d.type == DetailType.TREATMENT);
  }
}
