import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Modal } from 'react-native';

const Filmes = () => {
  const movies = [
    {
      id: 1,
      title: 'Barbie',
      description: 'No mundo mágico das Barbies, "Barbieland", uma das bonecas começa a perceber que não se encaixa como as outras. Depois de ser expulsa, ela parte para uma aventura no "mundo real", onde descobre que a beleza está no interior de cada um.',
      budget: '145000000',
      vote: '7.316',
      duration: '112 min',
      releaseDate: '2023-07-19',
      poster: 'https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
      cast: [
        { 
          id: 1,
          name: 'Margot Robbie', 
          character: 'Barbie',
          image: 'https://m.media-amazon.com/images/M/MV5BMTgxNDcwMzU2Nl5BMl5BanBnXkFtZTcwNDc4NzkzOQ@@._V1_UY1200_CR84,0,630,1200_AL_.jpg',
          bio: 'Margot Elise Robbie é uma atriz e produtora australiana que ganhou reconhecimento internacional por papéis em blockbusters e filmes independentes. Sua carreira decolou após estrelar "O Lobo de Wall Street" (2013) ao lado de Leonardo DiCaprio. Posteriormente, ganhou aclamação crítica por seu papel como Tonya Harding no filme biográfico "Eu, Tonya" (2017).',
          dob: '1990-07-02',
          birthplace: 'Dalby, Queensland, Austrália',
          films: ['Barbie', 'Eu, Tonya', 'Era Uma Vez em... Hollywood', 'O Lobo de Wall Street', 'Aves de Rapina']
        },
        { 
          id: 2,
          name: 'Ryan Gosling', 
          character: 'Ken',
          image: 'https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_.jpg',
          bio: 'Ryan Thomas Gosling é um ator canadense que iniciou sua carreira na televisão infantil antes de se tornar um dos atores mais respeitados de Hollywood. Conhecido por sua versatilidade, Gosling conquistou o público com performances marcantes em filmes como "Drive", "La La Land" e "Blade Runner 2049". Sua abordagem meticulosa e comprometida com cada papel o estabeleceu como uma força criativa única no cinema contemporâneo.',
          dob: '1980-11-12',
          birthplace: 'London, Ontario, Canadá',
          films: ['Barbie', 'La La Land', 'Drive', 'Blade Runner 2049', 'Diário de uma Paixão']
        }
      ]
    },
    {
      id: 2,
      title: 'Oppenheimer',
      description: 'A história do cientista americano J. Robert Oppenheimer e seu papel no desenvolvimento da bomba atômica durante a Segunda Guerra Mundial.',
      budget: '100000000',
      vote: '8.124',
      duration: '180 min',
      releaseDate: '2023-07-20',
      poster: 'https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg',
      cast: [
        { 
          id: 3,
          name: 'Cillian Murphy', 
          character: 'J. Robert Oppenheimer',
          image: 'https://cdn.britannica.com/10/215010-050-A44F9280/Irish-actor-Cillian-Murphy-2017.jpg',
          bio: 'Cillian Murphy é um ator irlandês aclamado por sua intensidade e versatilidade em filmes e televisão. Ganhou reconhecimento internacional por sua colaboração com o diretor Christopher Nolan em filmes como "Batman Begins" e "Inception". Sua atuação como Tommy Shelby na série "Peaky Blinders" solidificou sua reputação como um dos atores mais talentosos de sua geração.',
          dob: '1976-05-25',
          birthplace: 'Douglas, Cork, Irlanda',
          films: ['Oppenheimer', 'Peaky Blinders (série)', 'Inception', 'Batman Begins', 'A Quiet Place Part II']
        },
        { 
          id: 4,
          name: 'Emily Blunt', 
          character: 'Katherine Oppenheimer',
          image: 'https://m.media-amazon.com/images/M/MV5BMTY5ODcxMDU4NV5BMl5BanBnXkFtZTcwMjAzNjQyNQ@@._V1_.jpg',
          bio: 'Emily Olivia Leah Blunt é uma atriz britânica conhecida por sua versatilidade e presença carismática na tela. Desde sua estreia em "Meu Querido Diabo", ela construiu uma carreira impressionante com performances aclamadas em filmes como "O Diabo Veste Prada", "Sicario", "Um Lugar Silencioso" e o musical "Caminhos da Floresta", demonstrando sua capacidade de transitar entre diferentes gêneros com maestria.',
          dob: '1983-02-23',
          birthplace: 'Londres, Inglaterra',
          films: ['Oppenheimer', 'Um Lugar Silencioso', 'O Diabo Veste Prada', 'Sicario', 'Na Mira do Perigo']
        }
      ]
    },
    {
      id: 3,
      title: 'Duna: Parte Dois',
      description: 'Paul Atreides se une a Chani e aos Fremen em uma guerra de vingança contra os conspiradores que destruíram sua família.',
      budget: '165000000',
      vote: '8.521',
      duration: '166 min',
      releaseDate: '2024-02-29',
      poster: 'https://ingresso-a.akamaihd.net/prd/img/movie/duna-parte-2/3971d5d6-702d-40d8-b990-872d4ffe3e32.webp',
      cast: [
        { 
          id: 5,
          name: 'Timothée Chalamet', 
          character: 'Paul Atreides',
          image: 'https://th.bing.com/th/id/OIP.xxUimcKXn8cRIYEe2B4slAHaLH?rs=1&pid=ImgDetMain',
          bio: 'Timothée Hal Chalamet é um ator franco-americano conhecido por seu trabalho em filmes independentes e produções de Hollywood. Ganhou destaque internacional com sua atuação em "Me Chame Pelo Seu Nome" (2017), que lhe rendeu uma indicação ao Oscar de Melhor Ator. Sua abordagem sensível e comprometida com personagens complexos estabeleceu-o como um dos jovens atores mais talentosos de sua geração.',
          dob: '1995-12-27',
          birthplace: 'Nova Iorque, Estados Unidos',
          films: ['Duna: Parte Dois', 'Duna', 'Me Chame Pelo Seu Nome', 'Adoráveis Mulheres', 'Wonka']
        },
        { 
          id: 6,
          name: 'Zendaya', 
          character: 'Chani',
          image: 'https://th.bing.com/th/id/OIP.hOCnNKpXuVRkPnLyd49K7gHaE8?rs=1&pid=ImgDetMain',
          bio: 'Zendaya Maree Stoermer Coleman, conhecida profissionalmente como Zendaya, é uma atriz, cantora e dançarina americana que começou sua carreira como estrela infantil da Disney Channel. Seu talento excepcional a levou a papéis aclamados em produções de alto perfil como "Euphoria", pela qual se tornou a mais jovem vencedora do Emmy de Melhor Atriz em Série Dramática, e a franquia Homem-Aranha ao lado de Tom Holland.',
          dob: '1996-09-01',
          birthplace: 'Oakland, Califórnia, Estados Unidos',
          films: ['Duna: Parte Dois', 'Duna', 'Euphoria (série)', 'Homem-Aranha: Sem Volta Para Casa', 'O Rei do Show']
        }
      ]
    }
  ];

  const [selectedMovie, setSelectedMovie] = useState(movies[0]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedActor, setSelectedActor] = useState(null);

  const showActorDetails = (actor) => {
    setSelectedActor(actor);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Filmes</Text>
      </View>

      <ScrollView>
        <View style={styles.movieContainer}>
          <Image 
            source={{ uri: selectedMovie.poster }} 
            style={styles.posterImage} 
          />
          <View style={styles.movieInfo}>
            <Text style={styles.movieTitle}>{selectedMovie.title}</Text>
            <Text style={styles.movieDescription}>{selectedMovie.description}</Text>
          </View>

          <View style={styles.statsCard}>
            <Text>Orçamento: ${parseInt(selectedMovie.budget).toLocaleString()}</Text>
            <Text>Avaliação: {selectedMovie.vote}</Text>
            <Text>Duração: {selectedMovie.duration}</Text>
            <Text>Lançamento: {selectedMovie.releaseDate}</Text>
          </View>

          <Text style={styles.sectionTitle}>Atores</Text>
          
          {selectedMovie.cast.map((actor, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.actorCard}
              onPress={() => showActorDetails(actor)}
            >
              <Image 
                source={{ uri: actor.image }} 
                style={styles.actorImage} 
              />
              <View style={styles.actorInfo}>
                <Text style={styles.actorCharacter}>{actor.character}</Text>
                <Text style={styles.actorName}>{actor.name}</Text>
              </View>
              <Text style={styles.chevron}>›</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Outros Filmes</Text>
        <ScrollView horizontal style={styles.horizontalScroll}>
          {movies.map(movie => (
            <TouchableOpacity 
              key={movie.id} 
              style={styles.thumbnailContainer}
              onPress={() => setSelectedMovie(movie)}
            >
              <Image 
                source={{ uri: movie.poster }} 
                style={styles.thumbnail} 
              />
              <Text style={styles.thumbnailTitle}>{movie.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>

    
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.backButton}>← Voltar</Text>
            </TouchableOpacity>
          </View>
          
          {selectedActor && (
            <ScrollView>
              <View style={styles.actorDetailContainer}>
                <Image 
                  source={{ uri: selectedActor.image }} 
                  style={styles.actorDetailImage} 
                />
                <Text style={styles.actorDetailName}>{selectedActor.name}</Text>
                <Text style={styles.actorDetailBio}>{selectedActor.bio}</Text>
                
                <View style={styles.infoCard}>
                  <Text style={styles.infoText}>Personagem em {selectedMovie.title}: {selectedActor.character}</Text>
                  <Text style={styles.infoText}>Data de Nascimento: {selectedActor.dob}</Text>
                  <Text style={styles.infoText}>Local de Nascimento: {selectedActor.birthplace}</Text>
                </View>
                
                <Text style={styles.sectionTitle}>Filmografia</Text>
                {selectedActor.films.map((film, index) => (
                  <View key={index} style={styles.filmItem}>
                    <Text style={styles.filmTitle}>{film}</Text>
                  </View>
                ))}
              </View>
            </ScrollView>
          )}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#fff',
    marginTop: 30,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  backButton: {
    fontSize: 16,
    color: '#2e7d32',
    fontWeight: '500',
  },
  movieContainer: {
    padding: 16,
  },
  posterImage: {
    width: 360,
    height: 360,
    borderRadius: 8,
    marginBottom: 16,
  },
  movieInfo: {
    marginBottom: 16,
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  movieDescription: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  statsCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 12,
    paddingHorizontal: 16,
  },
  actorCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    marginHorizontal: 16,
    alignItems: 'center',
    elevation: 1,
  },
  actorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  actorInfo: {
    flex: 1,
    marginLeft: 12,
  },
  actorCharacter: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  actorName: {
    fontSize: 14,
    color: '#666',
  },
  chevron: {
    fontSize: 24,
    color: '#999',
  },
  horizontalScroll: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  thumbnailContainer: {
    marginRight: 12,
    width: 120,
  },
  thumbnail: {
    width: 120,
    height: 180,
    borderRadius: 8,
  },
  thumbnailTitle: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  },
  
 
  modalContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  modalHeader: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#fff',
    marginTop: 30,
  },
  actorDetailContainer: {
    padding: 16,
  },
  actorDetailImage: {
    width: 300,
    height: 300,
    borderRadius: 8,
    marginBottom: 16,
  },
  actorDetailName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  actorDetailBio: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    marginBottom: 16,
  },
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  infoText: {
    fontSize: 14,
    marginBottom: 4,
  },
  filmItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    marginHorizontal: 16,
    elevation: 1,
  },
  filmTitle: {
    fontSize: 16,
    fontWeight: '500',
  }
});

export default Filmes;