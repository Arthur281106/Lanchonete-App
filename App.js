import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function LanchoneteApp() {
  const [nome, setNome] = useState("");
  const [lanche, setLanche] = useState("Pizza");
  const [observacao, setObservacao] = useState("");
  const [pedido, setPedido] = useState(null);

  const getEmoji = () => {
    switch (lanche) {
      case "Pizza": return "🍕";
      case "Hambúrguer": return "🍔";
      case "Cachorro-quente": return "🌭";
      default: return "🍽️";
    }
  };

  const handleSubmit = () => {
    setPedido({ nome, lanche, observacao });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>🍔 Lanchonete</Text>

        <TextInput
          placeholder="Seu nome"
          value={nome}
          onChangeText={setNome}
          style={styles.input}
        />

        <Text style={styles.label}>Escolha seu lanche:</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={lanche}
            onValueChange={(itemValue) => setLanche(itemValue)}
          >
            <Picker.Item label="Pizza" value="Pizza" />
            <Picker.Item label="Hambúrguer" value="Hambúrguer" />
            <Picker.Item label="Cachorro-quente" value="Cachorro-quente" />
          </Picker>
        </View>

        <Text style={styles.emoji}>{getEmoji()}</Text>

        <TextInput
          placeholder="Observações do pedido"
          value={observacao}
          onChangeText={setObservacao}
          style={styles.input}
        />

        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Fazer Pedido</Text>
        </Pressable>

        {pedido && (
          <View style={styles.resultado}>
            <Text style={styles.resultTitle}>📋 Pedido</Text>
            <Text>👤 {pedido.nome}</Text>
            <Text>🍽️ {pedido.lanche}</Text>
            <Text>📝 {pedido.observacao}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE8A3",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "90%",
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 20,
    elevation: 5,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    marginBottom: 15,
    overflow: "hidden",
  },
  emoji: {
    textAlign: "center",
    fontSize: 60,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#FF7A00",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  resultado: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#FFF3D6",
    borderRadius: 10,
  },
  resultTitle: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});