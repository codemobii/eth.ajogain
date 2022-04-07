import { View } from "react-native";
import React, { useState } from "react";
import { AuthLayout } from "../../layouts";
import { Button, Input, Link, Text } from "../../components";
import styles from "./styles";

export function RegisterScreen() {
  const [changeHeight, setChangeHeight] = useState(false);

  return (
    <AuthLayout
      pageTitle={"Start saving better together"}
      pageDesc="Join our community of investors and traders."
      authType="Register"
      changeHeight={changeHeight}
    >
      <Input
        icon="person-outline"
        label="Username"
        onFocus={() => setChangeHeight(true)}
        onBlur={() => setChangeHeight(false)}
      />

      <Input
        icon="at"
        label="Email"
        onFocus={() => setChangeHeight(true)}
        onBlur={() => setChangeHeight(false)}
      />

      <Input
        icon="lock-closed-outline"
        label="Password"
        secureTextEntry
        onFocus={() => setChangeHeight(true)}
        onBlur={() => setChangeHeight(false)}
      />

      <View style={{ marginTop: 30 }}>
        <Button>Sign Up</Button>
      </View>

      <View style={styles.absoluteText}>
        <Text style={{ marginRight: 5 }}>Don't have an account?</Text>
        <Link>Sign Up</Link>
      </View>
    </AuthLayout>
  );
}
