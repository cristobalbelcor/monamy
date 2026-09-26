# Monamy

Herramienta de apoyo emocional y orientación para niños, adolescentes, familias y
educadores en Colombia. Monamy adapta su lenguaje al rol de quien la usa y
acompaña la conversación sin reemplazar la atención profesional.

> Monamy no sustituye atención psicológica, médica ni institucional.
> En una emergencia: **106** (ICBF) · **108** (salud mental) · **123** (emergencias) · **155** (violencia de género).

## Requisitos

- Java 17 o superior
- Una API key de un proveedor compatible con la API de chat de OpenAI (por defecto, Groq)

## Cómo ejecutarlo

La clave nunca se escribe en el código: se lee del entorno.

```bash
export GROQ_API_KEY=tu_clave
./mvnw spring-boot:run
```

La aplicación queda en <http://localhost:8081>.

Para empaquetarla:

```bash
./mvnw clean package
java -jar target/monamy-1.0.0.jar
```

## Configuración

Todo se sobrescribe por variable de entorno, sin tocar el código:

| Variable | Propiedad | Por defecto |
|---|---|---|
| `GROQ_API_KEY` | `groq.api.key` | *(obligatoria)* |
| `GROQ_MODEL` | `groq.api.model` | `llama-3.1-8b-instant` |
| `SERVER_PORT` | `server.port` | `8081` |

## Estructura

```
src/main/java/com/example/monamy/
├── MonamyApplication.java      punto de entrada
├── config/                     CORS y configuración del proveedor de IA
├── controller/                 endpoints REST
├── dto/                        objetos de entrada y salida de la API
├── exception/                  manejo centralizado de errores
├── model/                      modelo del dominio
└── service/                    llamada al proveedor de IA

src/main/resources/static/
├── index.html
└── assets/
    ├── css/styles.css          hoja de estilos única
    ├── img/                    imágenes
    └── js/
        ├── main.js             punto de entrada, cableado de eventos
        ├── config.js           constantes
        ├── data/               catálogo de roles, temas y subtemas
        ├── prompts/            instrucciones de sistema por rol
        ├── core/               estado, conversación y cliente HTTP
        └── ui/                 pintado de pantallas y componentes
```

El frontend usa módulos ES nativos: no hay empaquetador ni paso de compilación.

## Pruebas

```bash
./mvnw test
```

## Arquitectura

El navegador nunca ve la API key. El frontend habla solo con este backend, y es
el backend quien añade la credencial y llama al proveedor.

El chat usa `POST /api/chat/stream`: la respuesta llega como Server-Sent Events
(`fragmento`, y al final `fin` o `error`) a medida que el modelo la genera, así el
texto empieza a verse en cuanto sale el primer token. `POST /api/chat` sigue
disponible y devuelve la respuesta completa en un solo JSON.

```
navegador  ──POST /api/chat/stream──>  ChatController  ──>  GroqService  ──>  API del proveedor
                                      │
                              GlobalExceptionHandler
                    (traduce cualquier fallo a una respuesta amable)
```

Las instrucciones que definen la voz de Monamy para cada rol viven en
`assets/js/prompts/system-prompts.js` y se envían como primer mensaje de la
conversación.

## Créditos

Universidad del Tolima · CIPA #3 · 2026
