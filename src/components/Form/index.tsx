import { useRef, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import { styles } from "./style";

import { toast } from "@/lib/toast";
import { Dropdown } from "../Dropdown";
import { TAGS } from "@/constants/tags";
import { FormProps } from "./form";
import { UNITS } from "@/constants/units";
import { Order } from "@/storage/storage";
import { isNumber } from "@/lib/string-utils";

export function Form({ handleSubmit }: FormProps) {
  const [amount, setAmount] = useState("1");
  const [item, setItem] = useState("");

  const [unit, setUnit] = useState<(typeof UNITS)[0]>(UNITS[0]);
  const [tag, setTag] = useState<(typeof TAGS)[0]>(TAGS[0]);

  const itemInputRef = useRef<TextInput>(null);
  const amountInputRef = useRef<TextInput>(null);

  function handleSubmitClick() {
    if (!item) return toast("Preencha todos os campos");

    const data: Order = {
      amount: `${+amount}`,
      item,
      tag: tag.value,
      unit: unit.value,
    };

    handleSubmit(data);
    setAmount("1");
    setItem("");

    itemInputRef.current?.focus();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Item</Text>
      <TextInput
        style={styles.input}
        onChangeText={setItem}
        value={item}
        ref={itemInputRef}
        enterKeyHint="next"
        onSubmitEditing={() => {
          amountInputRef.current?.focus();
          console.log("Click");
        }}
      />

      <View style={styles.row}>
        <View>
          <Text style={styles.label}>Quantidade</Text>
          <View style={styles.dropdownInputContainer}>
            <TextInput
              style={[styles.input, styles.dropdownInput]}
              keyboardType="numeric"
              value={`${amount}`}
              onChangeText={(value) => {
                if (value === ".") value = "0.";
                if (isNumber(value)) {
                  setAmount(value);
                }
              }}
              ref={amountInputRef}
            />
            <Dropdown
              style={styles.dropdownInputDropdown}
              value={unit}
              choices={UNITS}
              onChange={setUnit}
              render={(item) => (
                <Dropdown.Item label={item.label} selected={item == unit} />
              )}
            />
          </View>
        </View>

        <View>
          <Text style={styles.label}>Categoria</Text>
          <Dropdown
            value={tag}
            choices={TAGS}
            onChange={setTag}
            render={(item) => (
              <Dropdown.Item
                label={item.label}
                selected={item == tag}
                icon={item.icon}
              />
            )}
          />
        </View>

        <TouchableOpacity style={[styles.button]} onPress={handleSubmitClick}>
          <AntDesign name="plus" color="white" size={18} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
