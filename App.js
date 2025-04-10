import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

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
      poster: 'https://br.web.img3.acsta.net/pictures/23/06/21/21/10/1335465.jpg',
      cast: [
        { name: 'Margot Robbie', character: 'Barbie' },
        { name: 'Ryan Gosling', character: 'Ken' },
        { name: 'America Ferrera', character: 'Gloria' },
        { name: 'Kate McKinnon', character: 'Barbie' },
        { name: 'Ariana Greenblatt', character: 'Sasha' },
        { name: 'Michael Cera', character: 'Allan' }
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
      poster: 'https://upload.wikimedia.org/wikipedia/pt/5/5b/Oppenheimer_poster.jpg',
      cast: [
        { name: 'Cillian Murphy', character: 'J. Robert Oppenheimer' },
        { name: 'Emily Blunt', character: 'Katherine Oppenheimer' },
        { name: 'Matt Damon', character: 'Leslie Groves' },
        { name: 'Robert Downey Jr.', character: 'Lewis Strauss' },
        { name: 'Florence Pugh', character: 'Jean Tatlock' },
        { name: 'Josh Hartnett', character: 'Ernest Lawrence' }
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
        { name: 'Timothée Chalamet', character: 'Paul Atreides' },
        { name: 'Zendaya', character: 'Chani' },
        { name: 'Rebecca Ferguson', character: 'Lady Jessica' },
        { name: 'Josh Brolin', character: 'Gurney Halleck' },
        { name: 'Javier Bardem', character: 'Stilgar' },
        { name: 'Austin Butler', character: 'Feyd-Rautha Harkonnen' }
      ]
    },
    {
      id: 4,
      title: 'Pobres Criaturas',
      description: 'A jovem Bella Baxter é trazida de volta à vida pelo brilhante e não convencional cientista Dr. Godwin Baxter após ela se afogar.',
      budget: '75000000',
      vote: '7.935',
      duration: '141 min',
      releaseDate: '2023-12-22',
      poster: 'https://static.wikia.nocookie.net/dublagem/images/3/3e/Pobres_Criaturas.jpg/revision/latest?cb=20240311033940&path-prefix=pt-br',
      cast: [
        { name: 'Emma Stone', character: 'Bella Baxter' },
        { name: 'Mark Ruffalo', character: 'Duncan Wedderburn' },
        { name: 'Willem Dafoe', character: 'Dr. Godwin Baxter' },
        { name: 'Ramy Youssef', character: 'Max McCandles' },
        { name: 'Jerrod Carmichael', character: 'Harry Astley' },
        { name: 'Christopher Abbott', character: 'Simon Blenkinsopp' }
      ]
    },
    {
      id: 5,
      title: 'Wonka',
      description: 'A história de como o maior inventor, mágico e chocolateiro do mundo se tornou o amado Willy Wonka que conhecemos hoje.',
      budget: '125000000',
      vote: '7.210',
      duration: '116 min',
      releaseDate: '2023-12-15',
      poster: 'https://upload.wikimedia.org/wikipedia/pt/d/db/Wonka_%28filme%29.jpg',
      cast: [
        { name: 'Timothée Chalamet', character: 'Willy Wonka' },
        { name: 'Olivia Colman', character: 'Mrs. Scrubitt' },
        { name: 'Hugh Grant', character: 'Oompa Loompa' },
        { name: 'Keegan-Michael Key', character: 'Chefe de Polícia' },
        { name: 'Sally Hawkins', character: 'Mãe de Willy' },
        { name: 'Rowan Atkinson', character: 'Padre Julius' }
      ]
    }
  ];

  const [selectedMovie, setSelectedMovie] = React.useState(movies[0]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backButton}>← Detalhes</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.movieContainer}>
          <Image 
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/d/db/Wonka_%28filme%29.jpg' }} 
            style={styles.posterImage} 
          />
          <View style={styles.movieInfo}>
            <Text style={styles.movieTitle}>{selectedMovie.title}</Text>
            <Text style={styles.movieDescription}>{selectedMovie.description}</Text>
          </View>

          <View style={styles.statsCard}>
            <Text>Orçamento: {selectedMovie.budget}</Text>
            <Text>Voto: {selectedMovie.vote}</Text>
            <Text>Duração: {selectedMovie.duration}</Text>
            <Text>Lançamento: {selectedMovie.releaseDate}</Text>
          </View>

          <Text style={styles.sectionTitle}>Atores</Text>
          
          {selectedMovie.cast.map((actor, index) => (
            <TouchableOpacity key={index} style={styles.actorCard}>
              <Image 
                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/10829/10829389.png' }} 
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
                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/10829/10829389.png' }} 
                style={styles.thumbnail} 
              />
              <Text style={styles.thumbnailTitle}>{movie.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>
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
    width: '100%',
    height: 250,
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
  },
  actorCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
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
  }
});

export default Filmes;