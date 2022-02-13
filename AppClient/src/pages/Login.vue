<!-- Esta pagina se usara la hacer un Login a un usuario -->
<template>
  <q-page class="flex flex-center" padding>
    <div class="full-width" style="max-width: 300px">
      <h5 class="q-my-sm text-center text-primary">Login</h5>
      <q-card>
        <q-card-section>
          <q-input
            v-model="Usuario"
            square
            filled
            clearable
            class="q-mb-sm"
            color="positive"
            type="username"
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
            placeholder="Usa una segura!"
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
          <q-btn
            color="primary"
            class="full-width"
            label="Login"
            @click="login"
          />
          <div class="q-my-sm text-center">
            ¿No tienes cuenta?
            <a href="http://localhost:8080/#/registrarse" class="text-primary"
              >Registrate ¡Es gratis!</a
            >
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import { useQuasar, QSpinnerGears } from "quasar";
export default defineComponent({
  name: "Login",
  setup() {
    const $q = useQuasar();
    return {
      login() {
        $q.notify({
          spinner: QSpinnerGears,
          message: "Entrando",
          color: "positive",
          timeout: 4000,
          progress: true,
        });
      },
      required(val) {
        return (val && val.length > 0) || "El campo no puede estar vacío";
      },
      short(val) {
        return (val && val.length >= 4) || "El valor es demasiado corto";
      },
    };
  },
  data() {
    return {
      Usuario: "",
      Contraseña: "",
      passwordFieldType: "password",
      visibility: false,
      visibilityIcon: "visibility",
      alert: ref(false),
    };
  },
  methods: {
    switchVisibility() {
      this.visibility = !this.visibility;
      this.passwordFieldType = this.visibility ? "text" : "password";
      this.visibilityIcon = this.visibility ? "visibility_off" : "visibility";
    },
  },
});
</script>
