import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import CountryFlag from "react-native-country-flag";

const Flag = ({ code }) => {
    if (code != "") {
        return (
            <CountryFlag isoCode={code} size={100} />)
    }
    else {
        return (<></>);
    }
}

const Pais = ({ resultado }) => {
    const [info, setinfo] = useState([]);
    const [codigo, setcodigo] = useState("");
    const [nombre, setnombre] = useState();
    const [capital, setcapital] = useState();
    const [region, setregion] = useState();
    const [lengua, setlengua] = useState([]);
    const [area, setarea] = useState();
    useEffect(() => {
        setinfo(resultado);
        lengua.length = 0;
        Object.values(info).map(e => {
            setcodigo(e["id"]["ISO-3166-1-ALPHA-2"]);
            setnombre(e.nome.abreviado);
            setcapital(e.governo.capital.nome);
            setregion(e.localizacao.regiao.nome);
            setarea(e.area.total + " " + e.area.unidade.símbolo);
            Object.values(e.linguas).map(l => {
                lengua.push(l.nome)
            })
        }
        );
    });
    return (
        <Card>
            <Card.Title>{nombre}</Card.Title>
            <Card.Divider />
            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                <Flag code={codigo} />
                <Text style={{padding: 10, fontWeight: 'bold'}}>Capital: {capital}</Text>
                <Text style={{padding: 10, fontWeight: 'bold'}}>Region: {region}</Text>
                <Text style={{padding: 10, fontWeight: 'bold'}}>Lengua: {lengua.toString()}</Text>
                <Text style={{padding: 10, fontWeight: 'bold'}}>Área: {area}</Text>
            </View>
        </Card>
    );
};
export default Pais;