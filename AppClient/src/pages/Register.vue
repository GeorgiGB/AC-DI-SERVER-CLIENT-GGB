<!-- Vue para Registrar un Usuario -->
<template>
  <q-page class="flex flex-center" padding>
    <div class="full-width" style="max-width: 300px">
      <h5 class="q-my-sm text-center text-primary">Registro</h5>
      <q-card>
        <q-card-section>
          <q-input
            v-model="Nombre"
            square
            filled
            clearable
            placeholder="Nombre Apellido"
            class="q-mb-sm"
            color="positive"
            lazy-rules
            :rules="[required, short]"
            label="Nombre Completo"
          >
            <template #prepend>
              <q-icon name="perm_identity" />
            </template>
          </q-input>
          <q-input
            v-model="DNI"
            square
            filled
            clearable
            placeholder="12345678A"
            class="q-mb-sm"
            color="positive"
            lazy-rules
            :rules="[required, isDNI, short]"
            label="DNI / NIE"
          >
            <template #prepend>
              <q-icon name="badge" />
            </template>
          </q-input>
          <q-input
            v-model="Usuario"
            square
            filled
            clearable
            class="q-mb-sm"
            color="positive"
            lazy-rules
            :rules="[required, short]"
            label="Usuario"
          >
            <template #prepend>
              <q-icon name="account_circle" />
            </template>
          </q-input>
          <q-input
            v-model="Contraseña"
            square
            filled
            clearable
            class="q-mb-sm"
            color="positive"
            :type="passwordFieldType"
            lazy-rules
            :rules="[required, short]"
            label="Contraseña"
          >
            <template #prepend>
              <q-icon name="lock" />
            </template>
            <template #append>
              <q-icon
                :name="visibilityIcon"
                class="cursor-pointer"
                @click="switchVisibility"
              />
            </template>
          </q-input>
          <q-input
            v-model="reContraseña"
            square
            filled
            clearable
            class="q-mb-sm"
            placeholder="Repite la contraseña"
            color="positive"
            :type="passwordFieldType"
            lazy-rules
            :rules="[required, diffPassword, short]"
            label="Repetir Contraseña"
          >
            <template #prepend>
              <q-icon name="lock" />
            </template>
            <template #append>
              <q-icon
                :name="visibilityIcon"
                class="cursor-pointer"
                @click="switchVisibility"
              />
            </template>
          </q-input>
          <q-btn
            class="full-width"
            color="primary"
            label="Registrarme"
            @click="registrarse"
          ></q-btn>
          <div class="q-my-sm text-center">
            Quieres iniciar sesión?
            <a href="http://localhost:8080/#/login" class="text-primary"
              >Login</a
            >
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { useQuasar, QSpinnerGears } from "quasar";
export default {
  name: "Register",
  setup() {
    const $q = useQuasar();
    return {
      register() {
        $q.notify({
          spinner: QSpinnerGears,
          message: "Usuario Creado",
          color: "positive",
          timeout: 4000,
          progress: true,
        });
      },
      required(val) {
        return (val && val.length > 0) || "El campo no puede estar vacío";
      },
      diffPassword(val) {
        return (
          (val && val === this.Contraseña) || "Las contraseñas son distintas"
        );
      },
      short(val) {
        return (val && val.length > 5) || "El valor es demasiado corto";
      },
      isDNI(val) {
        var nifRegex = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;
        var nieRegex = /^[XYZ][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;
        return (
          nifRegex.test(val) ||
          nieRegex.test(val) ||
          "El valor NO es un DNI ni un NIE"
        );
      },
      isEmail(val) {
        const emailPattern =
          /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
        return emailPattern.test(val) || "El valor NO es un email";
      },
    };
  },
  data() {
    return {
      Nombre: "",
      DNI: "",
      Usuario: "",
      Contraseña: "",
      reContraseña: "",
      passwordFieldType: "password",
      visibility: false,
      visibilityIcon: "visibility",
    };
  },
  methods: {
    switchVisibility() {
      this.visibility = !this.visibility;
      this.passwordFieldType = this.visibility ? "text" : "password";
      this.visibilityIcon = this.visibility ? "visibility_off" : "visibility";
    },
  },
};
</script>
