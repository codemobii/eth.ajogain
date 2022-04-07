import { View } from "react-native";
import React from "react";
import { AuthLayout } from "../../layouts";
import { Button, Input, Link, Text } from "../../components";
import styles from "./styles";

export function LoginScreen({ navigation }) {
  return (
    <AuthLayout
      pageTitle={"Start saving better together"}
      pageDesc="Join our community of investors and traders."
      authType="Sign In"
    >
      <Input icon="at" label="Email" />

      <Input icon="lock-closed-outline" label="Password" secureTextEntry />

      <View style={styles.forgotPasswordContainer}>
        <Text style={{ marginRight: 5 }}>Forgot password?</Text>
        <Link>Reset password</Link>
      </View>

      <View style={{ marginTop: 30 }}>
        <Button>Continue</Button>
      </View>

      <View style={styles.absoluteText}>
        <Text style={{ marginRight: 5 }}>Don't have an account?</Text>
        <Link onPress={() => navigation.navigate("Register")}>Sign Up</Link>
      </View>
    </AuthLayout>
  );
}
