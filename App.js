import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [lembrete, setLembrete] = useState("");
  const [lembretes, setLembretes] = useState([]);
  const [memoCount, setMemoCount] = useState(0);

  const handleAddMemo = () => {
    setLembretes((lembretes) => {
      setMemoCount((count) => count + 1);
      return [...lembretes, { key: memoCount.toString(), value: lembrete }];
    });
    setLembrete("");
  };

  const handleTextChange = (text) => {
    setLembrete(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.lembreteInputView}>
        <TextInput
          value={lembrete}
          onChangeText={handleTextChange}
          style={styles.lembreteTextInput}
          placeholder="Lembrar..."
        />

        <View style={styles.memoButton}>
          <Button title="Add" onPress={handleAddMemo} />
        </View>
      </View>

      <View style={styles.memoList}>
        <FlatList
          data={lembretes}
          renderItem={(lembrete) => (
            <View style={styles.itemNaLista}>
              <Text key={lembrete.item.value}>{lembrete.item.value}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
  },
  lembreteInputView: {
    alignItems: "center",
    marginBottom: 12,
  },
  memoButton: {
    marginBottom: 1,
    width: "80%",
  },
  lembreteTextInput: {
    borderBottomColor: "#000000",
    width: "80%",
    borderBottomWidth: 1,
    marginBottom: 4,
    padding: 2,
    textAlign: "center",
  },
  memoList: {
    width: "80%",
    alignSelf: "center"
  },
  itemNaLista: {
    padding: 12,
    backgroundColor: "#CCC",
    borderColor: "#000",
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8,
    alignItems: "center",
  },
});
