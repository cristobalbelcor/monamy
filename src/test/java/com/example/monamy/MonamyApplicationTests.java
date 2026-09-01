package com.example.monamy;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

/**
 * Comprueba que el contexto de Spring arranca con toda la configuración cableada.
 * Falla si falta una propiedad obligatoria o si un bean no se puede construir.
 */
@SpringBootTest
class MonamyApplicationTests {

    @Test
    void elContextoDeAplicacionArranca() {
        // Si el contexto no levanta, la prueba falla antes de llegar aquí.
    }
}
