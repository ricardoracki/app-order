import { useState } from "react";
import { Alert, Text, View } from "react-native";

import * as Haptics from "expo-haptics";
import { Feather } from "@expo/vector-icons";
import { Share, Trash } from "lucide-react-native";

import { styles } from "./styles";
import { theme } from "@/styles/theme";

import { Logo } from "@/components/Logo";
import { List } from "@/components/List";
import { Form } from "@/components/Form";
import { DrawerMenu } from "@/components/DrawerMenu";
import { ImageBackground } from "@/components/ImageBackground";
import { Status } from "@/components/Status";
import { getStatusMessage } from "@/lib/statusMessage";
import { OrderListItem, useOrdersStorage } from "@/storage/storage";

export function Home() {
  const orderStorage = useOrdersStorage();
  const [openMenu, setOpenMenu] = useState(false);

  function handleAdd(order: OrderListItem) {
    orderStorage.create(order);
  }

  function onDelete(order: OrderListItem) {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    orderStorage.remove(order);
  }

  function handleDeleteClick(order: OrderListItem) {
    Alert.alert("Remover item", `Deseja remover ${order.item} da lista?`, [
      { text: "Sim", onPress: () => onDelete(order) },
      { text: "Cancelar" },
    ]);
  }

  function handleMarkToggle(order: OrderListItem) {
    orderStorage.toggleMark(order);
    Haptics.notificationAsync();
  }

  function handleClearAll() {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
    Alert.alert(
      "Limpar lista de compras",
      `Todos os items da lista de compras serão removidos. Deseja continuar?`,
      [
        {
          text: "Sim",
          onPress: () => {
            setOpenMenu(false);
            orderStorage.removeAll();
          },
        },
        { text: "Cancelar" },
      ]
    );
  }

  const itemsToBuy = orderStorage.data?.filter((d) => !d.mark).length || 0;

  return (
    <View style={styles.container}>
      <ImageBackground source={require("@/assets/cover.png")} />
      <View style={styles.header}>
        <Logo />
        <Feather
          name="menu"
          size={18}
          color="white"
          onPress={() => setOpenMenu(true)}
        />
      </View>
      <Form handleSubmit={handleAdd} />

      <List
        data={orderStorage.data}
        keyExtractor={(item) => `${Math.random()}${item.item}`}
        ListEmptyComponent={() => (
          <Text style={styles.emptyMessage}>
            Sua lista de compras está vazia!
          </Text>
        )}
        renderItem={({ item }) => (
          <List.Item
            key={`${Math.random()}${item.item}`}
            handleItemRemove={() => onDelete(item)}
            handleMenuPress={() => handleDeleteClick(item)}
            mark={item.mark}
            setMark={() => {
              handleMarkToggle(item);
            }}
            description={`${item.amount} ${item.unit}`}
            tagValue={item.tag}
            title={item.item}
          />
        )}
      />

      <Status>{getStatusMessage(itemsToBuy)}</Status>

      <DrawerMenu visible={openMenu} onBackdropClick={() => setOpenMenu(false)}>
        <DrawerMenu.Content>
          <DrawerMenu.Title>Opções</DrawerMenu.Title>
          <DrawerMenu.Title subtitle>Minha lista de compras</DrawerMenu.Title>

          <DrawerMenu.Item>
            <Share size={22} color={theme.colors.purple[500]} />
            <Text style={{ color: "white" }}>
              Enviar minha lista de compras
            </Text>
          </DrawerMenu.Item>

          <DrawerMenu.Item onPress={handleClearAll}>
            <Trash size={22} color={theme.colors.orange[500]} />
            <Text style={{ color: "white" }}>Limpar lista de compras</Text>
          </DrawerMenu.Item>
        </DrawerMenu.Content>
      </DrawerMenu>
    </View>
  );
}
