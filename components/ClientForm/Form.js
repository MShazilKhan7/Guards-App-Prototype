import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

// Validation schema using Yup
const schema = Yup.object().shape({
  fromDate: Yup.string().required("From Date is required"),
  toDate: Yup.string().required("To Date is required"),
  numberOfGuards: Yup.number()
    .typeError("Number of Guards must be a number")
    .required("Number of Guards is required")
    .positive("Number of Guards must be greater than zero"),
  site: Yup.string().required("Site is required"),
  description: Yup.string().required("Description is required"),
});

const AddEventForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Handle form submission here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>From Date</Text>
      <Controller
        control={control}
        name="fromDate"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="YYYY-MM-DD"
          />
        )}
      />
      {errors.fromDate && (
        <Text style={styles.error}>{errors.fromDate.message}</Text>
      )}

      <Text style={styles.label}>To Date</Text>
      <Controller
        control={control}
        name="toDate"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="YYYY-MM-DD"
          />
        )}
      />
      {errors.toDate && (
        <Text style={styles.error}>{errors.toDate.message}</Text>
      )}

      <Text style={styles.label}>Number of Guards Required</Text>
      <Controller
        control={control}
        name="numberOfGuards"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Enter number"
            keyboardType="numeric"
          />
        )}
      />
      {errors.numberOfGuards && (
        <Text style={styles.error}>{errors.numberOfGuards.message}</Text>
      )}

      <Text style={styles.label}>Site</Text>
      <Controller
        control={control}
        name="site"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Enter site name"
          />
        )}
      />
      {errors.site && <Text style={styles.error}>{errors.site.message}</Text>}

      <Text style={styles.label}>Description</Text>
      <Controller
        control={control}
        name="description"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Enter description"
            multiline
          />
        )}
      />
      {errors.description && (
        <Text style={styles.error}>{errors.description.message}</Text>
      )}

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});

export default AddEventForm;
