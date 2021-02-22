
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('teste').del()
    .then(function () {
      // Inserts seed entries
      return knex('teste').insert([
        { nome: 'Assassins creed',
          subtitulo: 'A cruazada Secreta',
         resumo: 'Muito antes de Ezio Auditore nascer e lutar pelo Credo dos Assassinos, ' +
             'a poderosa Irmandade já estava em plena ação. É Niccolò, pai do famoso Marco Polo, quem, em 1257, ' +
             'revela a história de Altaïr Ibn-La’Ahad, um dos mais importantes e extraordinários entre os Assassinos. ' +
             'Os acontecimentos que mudarão dramaticamente o Credo e a vida de Altaïr começam em Acre, 1191. É quando ' +
             'ele, a pedido de Al Mualim, parte para recuperar um artefato precioso na Terra Santa.',
         isbn: '8501098345',
         preco: '30,00',
         imagem: 'data:image/jpeg;base64,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'},

        {
          nome: 'Pegasus',
          subtitulo: 'E o Fogo do Olimpo',
          resumo: 'Uma arma mortal abala a vida olímpica. O novo lar de Emily corre perigo e a UCP potencializa a ' +
              'ameaça, mas pesadelos recorrentes revelam a nossa heroína um estranho refúgio, e uma surpreendente ' +
              'descoberta sobre a Chama mudará o rumo da história. Emily viaja entre mundos, e o amor por Pegasus e ' +
              'pelos olímpicos a faz arriscar tudo para salvá-los. Buscando aniquilar a monstruosa arma, ela ingressa ' +
              'em uma batalha que a conduz às origens do Olimpo, fazendo-a parte de um evento do qual jamais imaginou ' +
              'participar: Titanomaquia, a guerra épica entre olímpicos e titãs. Acompanhada de amigos leais e de um ' +
              'aliado inusitado, Emily volta no tempo e corre contra ele.Uma emocionante saga na qual nossa heroína ' +
              'desafiará os maiores poderes do cosmos. Conseguirá ela controlar a Chama e enfrentar os poderosos ' +
              'titãs para afastar a ameaça dos seus amigos?',
          isbn: '9788580449556',
          preco: '30,00',
          imagem: 'https://m.media-amazon.com/images/I/516JgQvvyCL.jpg'
        },

        {
          nome: 'O caçador de pipas',
          subtitulo: 'Romance',
          resumo: 'Amir é rico e bem-nascido, um pouco covarde, e sempre busca a aprovação de seu próprio pai. Hassan, ' +
              'que não sabe ler nem escrever, é conhecido pela coragem e bondade. Os dois, no entanto, são loucos por ' +
              'histórias antigas de grandes guerreiros, filmes de caubói americanos e pipas. E é justamente durante um ' +
              'campeonato de pipas, no inverno de 1975, que Hassan dá a Amir a chance de ser um grande homem, mas ele ' +
              'não enxerga sua redenção. Após este episódio, Amir vai para os Estados Unidos, fugindo da invasão ' +
              'soviética ao Afeganistão, mas 20 anos depois Hassan e a pipa azul o fazem voltar à sua terra natal para ' +
              'acertar contas com o passado.',
          isbn: '9788520917671',
          preco: '70,00',
          imagem: 'https://images-na.ssl-images-amazon.com/images/I/81yVzXTgLzL.jpg'
        },

          {
              nome: 'A Menina que Roubava Livros',
              subtitulo: 'Romance',
              resumo: 'A trajetória de Liesel Meminger é contada por uma narradora mórbida, surpreendentemente ' +
                  'simpática. Ao perceber que a pequena ladra de livros lhe escapa, a Morte afeiçoa-se à menina e ' +
                  'rastreia suas pegadas de 1939 a 1943. Traços de uma sobrevivente: a mãe comunista, perseguida pelo ' +
                  'nazismo, envia Liesel e o irmão para o subúrbio pobre de uma cidade alemã, onde um casal se dispõe ' +
                  'a adotá-los por dinheiro. O garoto morre no trajeto e é enterrado por um coveiro que deixa cair um ' +
                  'livro na neve. É o primeiro de uma série que a menina vai surrupiar ao longo dos anos. O único ' +
                  'vínculo com a família é esta obra, que ela ainda não sabe ler.',
              isbn: '8598078174',
              preco: '40,00',
              imagem: 'https://images-na.ssl-images-amazon.com/images/I/514GbfM-F4L._SX347_BO1,204,203,200_.jpg'
          },

          {
              nome: 'O Menino de Pijama Listrado',
              subtitulo: 'Romance',
              resumo: 'Bruno tem nove anos e não sabe nada sobre o Holocausto e a Solução Final contra os judeus. ' +
                  'Também não faz idéia que seu país está em guerra com boa parte da Europa, e muito menos que sua ' +
                  'família está envolvida no conflito. Na verdade, Bruno sabe apenas que foi obrigado a abandonar a ' +
                  'espaçosa casa em que vivia em Berlim e a mudar-se para uma região desolada, onde ele não tem ' +
                  'ninguém para brincar nem nada para fazer. Da janela do quarto, Bruno pode ver uma cerca, e para ' +
                  'além dela centenas de pessoas de pijama, que sempre o deixam com frio na barriga. Em uma de suas ' +
                  'andanças Bruno conhece Shmuel, um garoto do outro lado da cerca que curiosamente nasceu no mesmo ' +
                  'dia que ele. Conforme a amizade dos dois se intensifica, Bruno vai aos poucos tentando elucidar o ' +
                  'mistério que ronda as atividades de seu pai.',
              isbn: '853591112X',
              preco: '45,00',
              imagem: 'https://images-na.ssl-images-amazon.com/images/I/41lCCL6N4nL._SX330_BO1,204,203,200_.jpg'
          },

          {
              nome: 'A cabana',
              subtitulo: 'Romance',
              resumo: 'Durante uma viagem de fim de semana, a filha mais nova de Mack Allen Phillips é raptada e ' +
                  'evidências de que ela foi brutalmente assassinada são encontradas numa velha cabana.',
              isbn: '8599296361',
              preco: '27,47',
              imagem: 'https://images-na.ssl-images-amazon.com/images/I/91eXvRufnFL.jpg'
          },
      ]);
    });
};
