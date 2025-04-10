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
      poster: 'https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
      cast: [
        { 
          name: 'Margot Robbie', 
          character: 'Barbie',
          image: 'https://m.media-amazon.com/images/M/MV5BMTgxNDcwMzU2Nl5BMl5BanBnXkFtZTcwNDc4NzkzOQ@@._V1_UY1200_CR84,0,630,1200_AL_.jpg'
        },
        { 
          name: 'Ryan Gosling', 
          character: 'Ken',
          image: 'https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_.jpg'
        },
        { 
          name: 'America Ferrera', 
          character: 'Gloria',
          image: 'https://m.media-amazon.com/images/M/MV5BMTY0Mzc3NzY4NF5BMl5BanBnXkFtZTcwMDYzOTIzMw@@._V1_.jpg'
        },
        { 
          name: 'Kate McKinnon', 
          character: 'Barbie',
          image: 'https://m.media-amazon.com/images/M/MV5BMzY3ZWY4ZDQtODU5MC00MTFjLWExZDktZmVmNjVhOGZmNjdhXkEyXkFqcGdeQXVyMjQxMDQzMjA@._V1_.jpg'
        },
        { 
          name: 'Ariana Greenblatt', 
          character: 'Sasha',
          image: 'https://m.media-amazon.com/images/M/MV5BNmUxNzRkYTItZjQ5MC00ZDEwLWE2ZDktYmJjZjE5NDA0MzBkXkEyXkFqcGdeQXVyMzAzNTY3MDM@._V1_.jpg'
        },
        { 
          name: 'Michael Cera', 
          character: 'Allan',
          image: 'https://m.media-amazon.com/images/M/MV5BMjVlZGRhYjktNWY0MS00ZjY0LTlhNTEtNzQwY2ZiZWYyZWIyXkEyXkFqcGdeQXVyMTk4MDgwNA@@._V1_.jpg'
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
          name: 'Cillian Murphy', 
          character: 'J. Robert Oppenheimer',
          image: 'https://m.media-amazon.com/images/M/MV5BMTUxMzU2MTk1OF5BMl5BanBnXkFtZTgwNDg0NjIwMDI@._V1_.jpg'
        },
        { 
          name: 'Emily Blunt', 
          character: 'Katherine Oppenheimer',
          image: 'https://m.media-amazon.com/images/M/MV5BMTY5ODcxMDU4NV5BMl5BanBnXkFtZTcwMjAzNjQyNQ@@._V1_.jpg'
        },
        { 
          name: 'Matt Damon', 
          character: 'Leslie Groves',
          image: 'https://m.media-amazon.com/images/M/MV5BMTM0NzYzNDgxMl5BMl5BanBnXkFtZTcwMDg2MTMyMw@@._V1_.jpg'
        },
        { 
          name: 'Robert Downey Jr.', 
          character: 'Lewis Strauss',
          image: 'https://m.media-amazon.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_.jpg'
        },
        { 
          name: 'Florence Pugh', 
          character: 'Jean Tatlock',
          image: 'https://m.media-amazon.com/images/M/MV5BNTk1OTUxMzIzMV5BMl5BanBnXkFtZTgwOTIxNjA0OTE@._V1_.jpg'
        },
        { 
          name: 'Josh Hartnett', 
          character: 'Ernest Lawrence',
          image: 'https://m.media-amazon.com/images/M/MV5BMTkzMzA5Nzk1Nl5BMl5BanBnXkFtZTYwNzQ1Mjgy._V1_.jpg'
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
      poster: 'https://m.media-amazon.com/images/M/MV5BODI0YjNhNjUtYjM0My00MTUwLWFlYTMtMWI2NGUzYjNjNDVlXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
      cast: [
        { 
          name: 'Timothée Chalamet', 
          character: 'Paul Atreides',
          image: 'https://m.media-amazon.com/images/M/MV5BOWU1Nzg0M2ItYjEzMi00ODliLThkODAtNGEyYzRkZTBmMmEzXkEyXkFqcGdeQXVyNDk2MjQ4Mzk@._V1_.jpg'
        },
        { 
          name: 'Zendaya', 
          character: 'Chani',
          image: 'https://m.media-amazon.com/images/M/MV5BMjAxZTk4NDAtYjI3Mi00OTk3LTg0NDEtNWFlNzE5NDM5MWM1XkEyXkFqcGdeQXVyOTI3MjYwOQ@@._V1_.jpg'
        },
        { 
          name: 'Rebecca Ferguson', 
          character: 'Lady Jessica',
          image: 'https://m.media-amazon.com/images/M/MV5BNzA4NDA1MTA5NV5BMl5BanBnXkFtZTcwNDkyODM4OA@@._V1_.jpg'
        },
        { 
          name: 'Josh Brolin', 
          character: 'Gurney Halleck',
          image: 'https://m.media-amazon.com/images/M/MV5BMTQ1MzYyMjQ0Nl5BMl5BanBnXkFtZTcwMTA0ODkyMg@@._V1_.jpg'
        },
        { 
          name: 'Javier Bardem', 
          character: 'Stilgar',
          image: 'https://m.media-amazon.com/images/M/MV5BMTY1NTc4NTYzMF5BMl5BanBnXkFtZTcwMDI2NzI2Mg@@._V1_.jpg'
        },
        { 
          name: 'Austin Butler', 
          character: 'Feyd-Rautha Harkonnen',
          image: 'https://m.media-amazon.com/images/M/MV5BZmNiZmMzN2MtOTNkMy00YjA1LTg4NzktMWI4Njg1NzI3ODAyXkEyXkFqcGdeQXVyMTMyNzQyMzky._V1_.jpg'
        }
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
      poster: 'https://m.media-amazon.com/images/M/MV5BNGIyYWMzNjktNDE3MC00YWQyLWEyMmEtN2ZmNzZhZDk3NGJlXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg',
      cast: [
        { 
          name: 'Emma Stone', 
          character: 'Bella Baxter',
          image: 'https://m.media-amazon.com/images/M/MV5BMjI4NjM1NDkyN15BMl5BanBnXkFtZTgwODgyNTY1MjE@._V1_.jpg'
        },
        { 
          name: 'Mark Ruffalo', 
          character: 'Duncan Wedderburn',
          image: 'https://m.media-amazon.com/images/M/MV5BNWIzZTI1ODUtZTUzMC00NTdiLWFlOTYtZTg4MGZkYmU4YzNjXkEyXkFqcGdeQXVyNTExOTk5Nzg@._V1_.jpg'
        },
        { 
          name: 'Willem Dafoe', 
          character: 'Dr. Godwin Baxter',
          image: 'https://m.media-amazon.com/images/M/MV5BNmJkYzJkMmQtYzBlMi00YmMzLWFkMjYtYzRkYjkwZjNhOWYxXkEyXkFqcGdeQXVyMTI3MDk3MzQ@._V1_.jpg'
        },
        { 
          name: 'Ramy Youssef', 
          character: 'Max McCandles',
          image: 'https://m.media-amazon.com/images/M/MV5BOTgzODAyODA1Ml5BMl5BanBnXkFtZTgwNzIzMTA0NzM@._V1_.jpg'
        },
        { 
          name: 'Jerrod Carmichael', 
          character: 'Harry Astley',
          image: 'https://m.media-amazon.com/images/M/MV5BMTk3MDQxNDM5MF5BMl5BanBnXkFtZTgwNDY4NjU3MjE@._V1_.jpg'
        },
        { 
          name: 'Christopher Abbott', 
          character: 'Simon Blenkinsopp',
          image: 'https://m.media-amazon.com/images/M/MV5BZDM1MGQxMzktMTBkYS00MTY2LTk3NjItZTIwNjhhZDY3NjU4XkEyXkFqcGdeQXVyNTExOTk5Nzg@._V1_.jpg'
        }
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
      poster: 'https://m.media-amazon.com/images/M/MV5BNDM4NTk0NjktZGVmOC00YTUwLTk2YzgtZWVmMGQ5NTAyNjcwXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg',
      cast: [
        { 
          name: 'Timothée Chalamet', 
          character: 'Willy Wonka',
          image: 'https://m.media-amazon.com/images/M/MV5BOWU1Nzg0M2ItYjEzMi00ODliLThkODAtNGEyYzRkZTBmMmEzXkEyXkFqcGdeQXVyNDk2MjQ4Mzk@._V1_.jpg'
        },
        { 
          name: 'Olivia Colman', 
          character: 'Mrs. Scrubitt',
          image: 'https://m.media-amazon.com/images/M/MV5BMTUxODY0MjI4Ml5BMl5BanBnXkFtZTgwMTM0NTcwOTE@._V1_.jpg'
        },
        { 
          name: 'Hugh Grant', 
          character: 'Oompa Loompa',
          image: 'https://m.media-amazon.com/images/M/MV5BMjA5ODgyNzcxMV5BMl5BanBnXkFtZTcwODc0MTUyMw@@._V1_.jpg'
        },
        { 
          name: 'Keegan-Michael Key', 
          character: 'Chefe de Polícia',
          image: 'https://m.media-amazon.com/images/M/MV5BMTcyMjM2MjIxMF5BMl5BanBnXkFtZTgwODE0MzE4NjE@._V1_.jpg'
        },
        { 
          name: 'Sally Hawkins', 
          character: 'Mãe de Willy',
          image: 'https://m.media-amazon.com/images/M/MV5BMTUxNzY3MjE0N15BMl5BanBnXkFtZTcwNzQwMzg5Ng@@._V1_.jpg'
        },
        { 
          name: 'Rowan Atkinson', 
          character: 'Padre Julius',
          image: 'https://m.media-amazon.com/images/M/MV5BMTg3NDUxMzQ0Ml5BMl5BanBnXkFtZTcwNzcyMDYwNA@@._V1_.jpg'
        }
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
            source={{ uri: selectedMovie.poster }} 
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
  }
});

export default Filmes;