
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const filmes = [
    {
        id: 1,
        titulo: 'Homen de Ferro 2',
        ano: 2010,
        cor: 'Aventura',
        imagem: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/iron-man-2-et00004643-24-03-2017-19-42-08.jpg',
        descricao: 'Tony Stark enfrenta novos desafios enquanto tenta proteger o mundo.'
    },
    {
        id: 2,
        titulo: 'Avatar',
        ano: 2009,
        cor: 'Aventura',
        imagem: 'https://m.media-amazon.com/images/I/91N1lG+LBIS._AC_UF894,1000_QL80_.jpg',
        descricao: 'Um ex-fuzileiro naval é enviado a Pandora para ajudar na colonização.'
    },
    {
        id: 3,
        titulo: 'Os Vingadores',
        ano: 2012,
        cor: 'Aventura',
        imagem: 'https://upload.wikimedia.org/wikipedia/en/0/0c/TheAvengers2012Poster.jpg',
        descricao: 'Heróis se unem para salvar o mundo de uma ameaça alienígena.'
    },
    {
        id: 4,
        titulo: 'Jurassic Park',
        ano: 1993,
        cor: 'Aventura',
        imagem: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Jurassic_Park_poster.jpg',
        descricao: 'Um parque temático com dinossauros geneticamente modificados sai do controle.'
    },
    {
        id: 5,
        titulo: 'Star Wars: Uma Nova Esperança',
        ano: 1977,
        cor: 'Ficção Científica',
        imagem: 'https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg',
        descricao: 'A luta entre a Aliança Rebelde e o Império Galáctico começa.'
    },
];

const Filmes = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Filmes</Text>
            {filmes.map((filme, index) => (
                <View key={filme.id} style={styles.card}>
                    {index < 2 ? (
                        // Centraliza as duas primeiras imagens
                        <View style={styles.centeredCard}>
                            <Image source={{ uri: filme.imagem }} style={styles.imageCentered} />
                            <Text style={styles.cardTitle}>{filme.titulo}</Text>
                            <Text>Ano: {filme.ano}</Text>
                            <Text>Gênero: {filme.cor}</Text>
                            <Text>Descrição: {filme.descricao}</Text>
                        </View>
                    ) : (
                        // Alinha as demais à esquerda
                        <View style={styles.leftAlignedCard}>
                            <Image source={{ uri:'https://cdn-icons-png.flaticon.com/128/10829/10829389.png' }} style={styles.imageLeft} />
                            <View style={styles.descriptionContainer}>
                                <Text style={styles.cardTitle}>{filme.titulo}</Text>
                                <Text>Ano: {filme.ano}</Text>
                                <Text>Gênero: {filme.cor}</Text>
                                <Text>Descrição: {filme.descricao}</Text>
                            </View>
                        </View>
                    )}
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#f8f9fa',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    card: {
        marginVertical: 10,
    },
    centeredCard: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 3,
        padding: 10,
    },
    leftAlignedCard: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 3,
        padding: 10,
        alignItems: 'center',
    },
    imageCentered: {
        height: 300,
        borderRadius: 10,
        width: 300,
    }});
    export default Filmes;