import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const products = [
    {
      title: 'Ração Family Plus',
      description: 'Family Plus é um alimento para cães, rico em nutrientes. Proporciona uma refeição adequada ao seu pet, seja ele filhote ou adulto, e com sabor irresistível.',
      price: 'R$ 149.99',
      createdAt: new Date(),
      image: 'https://res.cloudinary.com/dvxfzsqlz/image/upload/v1725912208/products/lqmujnrhgdfooegb8atu.png'
    },
    {
      title: 'Ração Golden Fórmula',
      description: 'GoldeN Formula Adultos Frango & Arroz Mini Bits é um alimento Premium Especial desenvolvido para cães adultos de pequeno porte. Os cães são essencialmente carnívoros e digerem muito melhor alimentos de origem animal.',
      price: 'R$ 59.99',
      createdAt: new Date(),
      image: 'https://res.cloudinary.com/dvxfzsqlz/image/upload/v1725912208/products/e9p55xlw7umcokg8lb8w.png'
    },
    {
      title: 'Ração Mandaí Cat Premium',
      description: 'MANDAÍ CAT PREMIUM é um alimento completo e balanceado, formulado com ingredientes selecionados de qualidade, que garante uma refeição saborosa e equilibrada, indispensáveis para a perfeita nutrição e saúde do seu gato.',
      price: 'R$ 129.99',
      createdAt: new Date(),
      image: 'https://res.cloudinary.com/dvxfzsqlz/image/upload/v1725912208/products/m7ksawlyrqhgeqsdbep6.png'
    },
    {
      title: 'Petisco Dreamies Carne',
      description: 'O Petisco Dreamies Salmão Irresistível para Gatos Adultos garantem diversão e mais momentos juntos com seu gato. São deliciosos petiscos para toda hora, com menos de três calorias por pedacinho, crocantes por fora e macios por dentro.',
      price: 'R$ 19.99',
      createdAt: new Date(),
      image: 'https://res.cloudinary.com/dvxfzsqlz/image/upload/v1725912208/products/cnxqzmg1yvwfu5emyn6t.png'
    },
    {
      title: 'Tapete MrPads Grass',
      description: 'O tapete higiênico Mr. Pads Grama possui cheirinho de grama, atrativo que auxilia na educação sanitária do seu animalzinho.',
      price: 'R$ 9.99',
      createdAt: new Date(),
      image: 'https://res.cloudinary.com/dvxfzsqlz/image/upload/v1725912208/products/okonb05ar1wz9kimdt9e.png'
    },
    {
      title: 'Ração Pedigree Sabor Ao Leite',
      description: 'Nós de PEDIGREE® acreditamos que todos os cães merecem um lar amoroso. Eles alimentam o que há de melhor nas pessoas e PEDIGREE® alimenta o que há de melhor neles.',
      price: 'R$ 13.99',
      createdAt: new Date(),
      image: 'https://res.cloudinary.com/dvxfzsqlz/image/upload/v1725912208/products/hth44q1saizw9c5dfo9c.png'
    },
    {
      title: 'Ração Pedigree Vital Pro',
      description: 'PEDIGREE® oferece a nutrição profissional que seu cão necessita para estar saudável em cada etapa de sua vida.',
      price: 'R$ 49.99',
      createdAt: new Date(),
      image: 'https://res.cloudinary.com/dvxfzsqlz/image/upload/v1725912209/products/raw9xh2p8mxwfrhhpspk.png'
    },
    {
      title: 'Ração Magnus Premium',
      description: 'Magnus Premium Todo Dia Cães Adultos Sabor Carne é um alimento premium completo seco, formulado com precisão para atender as exigências do cão adulto, acima de 12 meses, de qualquer raça, em fase de manutenção.',
      price: 'R$ 99.99',
      createdAt: new Date(),
      image: 'https://res.cloudinary.com/dvxfzsqlz/image/upload/v1725912209/products/nol8jhjwhfpd3bifcqat.png'
    },
    {
      title: 'Ração Canina TopDog Premium',
      description: 'TOPDOG PREMIUM é uma ração completa e balanceada para cães, com ingredientes de alta qualidade que garantem energia e vitalidade para seu pet.',
      price: 'R$ 159.99',
      createdAt: new Date(),
      image: 'https://res.cloudinary.com/dvxfzsqlz/image/upload/v1725912209/products/hqpbs0uykbo1zng6nere.png'
    },
    {
      title: 'Areia Higiênica PetClean',
      description: 'A areia higiênica PETCLEAN possui alta absorção, controle de odores e é ideal para manter a higiene da caixa de areia do seu gato.',
      price: 'R$ 29.99',
      createdAt: new Date(),
      image: 'https://res.cloudinary.com/dvxfzsqlz/image/upload/v1725912209/products/hqpbs0uykbo1zng6nere.png'
    },
    {
      title: 'Shampoo Pet Care Herbal',
      description: 'O shampoo PET CARE HERBAL possui uma fórmula suave e natural, ideal para cuidar da pele e do pelo do seu pet, proporcionando brilho e maciez.',
      price: 'R$ 39.90',
      createdAt: new Date(),
      image: 'https://res.cloudinary.com/dvxfzsqlz/image/upload/v1725912208/products/okonb05ar1wz9kimdt9e.png'
    },
    {
      title: 'Brinquedo Mordedor Resistente',
      description: 'Este mordedor resistente é ideal para cães de todas as idades, ajudando a manter os dentes saudáveis e entretendo seu pet por horas.',
      price: 'R$ 49.99',
      createdAt: new Date(),
      image: 'https://res.cloudinary.com/dvxfzsqlz/image/upload/v1725912208/products/okonb05ar1wz9kimdt9e.png'
    },
    {
      title: 'Cama Confort Premium',
      description: 'A cama CONFORT PREMIUM é macia e confortável, perfeita para proporcionar um descanso reparador para seu pet.',
      price: 'R$ 199.99',
      createdAt: new Date(),
      image: 'https://res.cloudinary.com/dvxfzsqlz/image/upload/v1725912208/products/cnxqzmg1yvwfu5emyn6t.png'
    },
    {
      title: 'Coleira Anti-Pulgas e Carrapatos',
      description: 'A coleira anti-pulgas e carrapatos protege seu pet de parasitas por até 8 meses, garantindo saúde e bem-estar.',
      price: 'R$ 89.99',
      createdAt: new Date(),
      image: 'https://res.cloudinary.com/dvxfzsqlz/image/upload/v1725912209/products/hqpbs0uykbo1zng6nere.png'
    },
    {
      title: 'Tapete Higiênico Absorvente',
      description: 'O tapete higiênico absorvente PETMATE é prático e eficaz para manter sua casa limpa, absorvendo rapidamente os líquidos.',
      price: 'R$ 59.99',
      createdAt: new Date(),
      image: 'https://res.cloudinary.com/dvxfzsqlz/image/upload/v1725912208/products/okonb05ar1wz9kimdt9e.png'
    },
    {
      title: 'Ração GranPlus para Cães Adultos',
      description: 'GRANPLUS é uma ração premium para cães adultos, enriquecida com vitaminas e minerais essenciais para a saúde do seu pet.',
      price: 'R$ 179.99',
      createdAt: new Date(),
      image: 'https://res.cloudinary.com/dvxfzsqlz/image/upload/v1725912208/products/e9p55xlw7umcokg8lb8w.png'
    },
    {
      title: 'Petiscos Naturais DogChew',
      description: 'Os petiscos DOGCHEW são feitos com ingredientes naturais, perfeitos como recompensa durante o treinamento ou para agradar seu cão.',
      price: 'R$ 24.99',
      createdAt: new Date(),
      image: 'https://res.cloudinary.com/dvxfzsqlz/image/upload/v1725912208/products/e9p55xlw7umcokg8lb8w.png'
    },
    {
      title: 'Arranhador de Sisal para Gatos',
      description: 'O arranhador de sisal PETPLAY é ideal para gatos, ajudando a manter as garras afiadas e protegendo os móveis da sua casa.',
      price: 'R$ 79.99',
      createdAt: new Date(),
      image: 'https://res.cloudinary.com/dvxfzsqlz/image/upload/v1725912208/products/e9p55xlw7umcokg8lb8w.png'
    },
    {
      title: 'Ração para Peixes Ornamentais AquaFood',
      description: 'AQUAFOOD é uma ração completa para peixes ornamentais, com nutrientes que promovem cores vivas e crescimento saudável.',
      price: 'R$ 34.90',
      createdAt: new Date(),
      image: 'https://res.cloudinary.com/dvxfzsqlz/image/upload/v1725912208/products/e9p55xlw7umcokg8lb8w.png'
    },
    {
      title: 'Comedouro Automático PetFeeder',
      description: 'O comedouro automático PETFEEDER permite programar as refeições do seu pet, garantindo que ele receba a quantidade certa de alimento, mesmo quando você estiver fora.',
      price: 'R$ 249.99',
      createdAt: new Date(),
      image: 'https://res.cloudinary.com/dvxfzsqlz/image/upload/v1725912208/products/e9p55xlw7umcokg8lb8w.png'
    },
    {
      title: 'Antipulgas Spot-On Gatos',
      description: 'O antipulgas SPOT-ON para gatos é de fácil aplicação e protege seu pet contra pulgas por até 30 dias, garantindo conforto e saúde.',
      price: 'R$ 64.99',
      createdAt: new Date(),
      image: 'https://res.cloudinary.com/dvxfzsqlz/image/upload/v1725912208/products/e9p55xlw7umcokg8lb8w.png'
    },
    {
      title: 'Ração Hipoalergênica PetCare',
      description: 'A ração hipoalergênica PETCARE é indicada para cães com sensibilidades alimentares, garantindo uma nutrição segura e equilibrada.',
      price: 'R$ 199.99',
      createdAt: new Date(),
      image: 'https://res.cloudinary.com/dvxfzsqlz/image/upload/v1725912208/products/hth44q1saizw9c5dfo9c.png'
    },
    {
      title: 'Gaiola para Pássaros HappyBird',
      description: 'A gaiola HAPPYBIRD é espaçosa e segura, ideal para manter seus pássaros confortáveis e protegidos.',
      price: 'R$ 149.90',
      createdAt: new Date(),
      image: 'https://res.cloudinary.com/dvxfzsqlz/image/upload/v1725912208/products/m7ksawlyrqhgeqsdbep6.png'
    },
    {
      title: 'Kit Higiene Dental PetClean',
      description: 'O kit de higiene dental PETCLEAN inclui escova e pasta de dentes especialmente formuladas para cães, ajudando a manter os dentes limpos e saudáveis.',
      price: 'R$ 34.99',
      createdAt: new Date(),
      image: 'https://res.cloudinary.com/dvxfzsqlz/image/upload/v1725912208/products/m7ksawlyrqhgeqsdbep6.png'
    },
    {
      title: 'Caminha para Gatos CozyCat',
      description: 'A caminha COZYCAT oferece um espaço acolhedor e confortável para seu gato descansar, com um design elegante que combina com qualquer ambiente.',
      price: 'R$ 129.90',
      createdAt: new Date(),
      image: 'https://res.cloudinary.com/dvxfzsqlz/image/upload/v1725912208/products/m7ksawlyrqhgeqsdbep6.png'
    },
    {
      title: 'Coleira de Identificação Personalizada',
      description: 'A coleira de identificação personalizada garante que seu pet seja facilmente reconhecido, com gravação do nome e telefone de contato.',
      price: 'R$ 49.90',
      createdAt: new Date(),
      image: 'https://res.cloudinary.com/dvxfzsqlz/image/upload/v1725912208/products/m7ksawlyrqhgeqsdbep6.png'
    },
    {
      title: 'Filtro para Aquário AquaClear',
      description: 'O filtro AQUACLEAR mantém a água do seu aquário cristalina e saudável.',
      price: 'R$ 89.99',
      createdAt: new Date(),
      image: 'https://res.cloudinary.com/dvxfzsqlz/image/upload/v1725912208/products/hth44q1saizw9c5dfo9c.png'
    },
    {
      title: 'Porta-Ração Hermético PetStore',
      description: 'O porta-ração hermético PETSTORE mantém a ração fresca e protegida da umidade, ideal para armazenar grandes quantidades de alimento.',
      price: 'R$ 89.90',
      createdAt: new Date(),
      image: 'https://res.cloudinary.com/dvxfzsqlz/image/upload/v1725912208/products/hth44q1saizw9c5dfo9c.png'
    },
    
    
  ];

  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }

  const cards = [
    {
      title: 'Missão',
      content: 'Nossa missão é promover saúde e bem estar para o seu animal.',
    },
    {
      title: 'Visão',
      content: 'Revolucionar o mercado agroper e ser líder em vendas de produtos pets na América Latina.',
    },
    {
      title: 'Valores',
      content: 'Bem-estar animal, respeito, amor e confiança.',
    },
  ];

  for (const card of cards) {
    await prisma.card.create({
      data: card,
    });
  }
  

}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
