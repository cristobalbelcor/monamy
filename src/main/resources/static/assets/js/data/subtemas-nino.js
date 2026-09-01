// Subtemas del rol "nino": cada tema abre una pantalla intermedia con una
// explicación amigable y preguntas concretas, en vez de ir directo al chat.

export const NINO_SUBTEMAS = {
    'tristeza-nino': {
        explicacion: '😢 La **tristeza** es una emoción que todos sentimos. Es como cuando el cielo se nubla: no dura para siempre, pero mientras llueve se puede sentir muy pesado. ¡Sentirse triste está bien! Lo importante es no quedarse solo con ese sentimiento.',
        subtemas: [
            { emoji: '😔', texto: 'Algo salió mal y me puse triste',       prompt: 'Me siento triste porque algo salió mal y quiero entender por qué me afecta tanto.' },
            { emoji: '💔', texto: 'Extraño mucho a alguien',                prompt: 'Extraño muchísimo a alguien que quiero mucho y eso me pone muy triste.' },
            { emoji: '🚫', texto: 'Mis amigos no me incluyeron',            prompt: 'Mis amigos no me incluyeron en algo y me siento rechazado/a y triste.' },
            { emoji: '❓', texto: 'Estoy triste pero no sé por qué',        prompt: 'Me siento triste pero no entiendo por qué, y eso me confunde.' },
            { emoji: '😭', texto: 'Lloro mucho y no puedo parar',           prompt: 'Lloro mucho y no puedo parar. Quiero entender qué me pasa y cómo calmarme.' },
        ]
    },
    'miedo-nino': {
        explicacion: '😰 El **miedo** es una emoción muy normal. Nuestro cuerpo lo siente para protegernos de las cosas que parecen peligrosas. A veces el miedo es útil, ¡pero a veces asusta demasiado! Hablar de él lo hace más pequeño.',
        subtemas: [
            { emoji: '🌑', texto: 'Me da miedo la oscuridad',               prompt: 'Me da mucho miedo la oscuridad, especialmente en las noches. Quiero aprender a manejarlo.' },
            { emoji: '🏠', texto: 'Me da miedo quedarme solo/a',            prompt: 'Me da miedo estar solo/a en casa o en cualquier lugar. ¿Por qué me pasa eso?' },
            { emoji: '💭', texto: 'Tengo pesadillas frecuentes',             prompt: 'Tengo pesadillas que me asustan mucho y me cuesta dormirme. ¿Qué puedo hacer?' },
            { emoji: '😟', texto: 'Tengo miedo de que algo malo pase',      prompt: 'Siento mucho miedo de que algo malo le pase a mi familia o a mí. No puedo dejar de pensar en eso.' },
            { emoji: '🏫', texto: 'Tengo miedo de ir al colegio',           prompt: 'Tengo miedo de ir al colegio y no sé bien por qué. Quiero hablar de eso.' },
        ]
    },
    'enojo-nino': {
        explicacion: '😡 El **enojo** también es una emoción normal. Cuando algo no es justo o alguien nos lastima, es normal sentir rabia. El problema no es enojarse, ¡sino qué hacemos con ese enojo! Hay formas de manejarlo sin hacernos daño ni hacerle daño a otros.',
        subtemas: [
            { emoji: '😤', texto: 'Me pongo muy bravo/a cuando no es justo', prompt: 'Me enojo muchísimo cuando siento que algo no es justo. Quiero aprender a manejar eso.' },
            { emoji: '👫', texto: 'Me peleo con mis hermanos',                prompt: 'Me peleo constantemente con mis hermanos y terminamos mal. ¿Qué puedo hacer?' },
            { emoji: '😠', texto: 'A veces me enojo con mis papás',          prompt: 'A veces me enojo mucho con mis papás y no sé cómo expresarlo sin que se enojen más.' },
            { emoji: '💥', texto: 'No sé controlar mi rabia',                 prompt: 'Cuando me enojo pierdo el control y digo o hago cosas de las que me arrepiento. Quiero aprender a controlarme.' },
            { emoji: '🏫', texto: 'Me enojo mucho en el colegio',            prompt: 'En el colegio me enojo mucho y eso me trae problemas. ¿Cómo puedo manejarlo mejor?' },
        ]
    },
    'familia-nino': {
        explicacion: '👨‍👩‍👧 La **familia** es donde aprendemos a querer y a vivir juntos. A veces las cosas en casa cambian o son difíciles, y eso nos puede poner tristes, confundidos o asustados. Está bien hablar de lo que pasa en nuestra familia.',
        subtemas: [
            { emoji: '💔', texto: 'Mis papás se separaron',                  prompt: 'Mis papás se separaron y no sé bien cómo sentirme con eso. Necesito que alguien me ayude a entender.' },
            { emoji: '👶', texto: 'Llegó un bebé a casa',                    prompt: 'Llegó un bebé a casa y siento que ya no me prestan la misma atención. Me cuesta adaptarme.' },
            { emoji: '🏠', texto: 'Me siento solo/a en casa',                prompt: 'Aunque estoy con mi familia, a veces me siento muy solo/a. Quiero hablar de eso.' },
            { emoji: '📢', texto: 'En mi casa hay muchas peleas',            prompt: 'En mi casa hay muchas peleas y discusiones. Eso me pone muy triste y asustado/a.' },
            { emoji: '👴', texto: 'Vivo con mis abuelos o tíos',             prompt: 'Vivo con mis abuelos o tíos, no con mis papás, y a veces me siento diferente por eso.' },
        ]
    },
    'autoestima-nino': {
        explicacion: '🌟 La **autoestima** es cómo nos sentimos con nosotros mismos. Cuando nos queremos y nos respetamos, somos más felices. ¡Cada niño y niña es único y especial! A veces nos olvidamos de eso, y está bien pedir ayuda para recordarlo.',
        subtemas: [
            { emoji: '🪞', texto: 'A veces no me gusto como soy',           prompt: 'A veces me miro y no me gusta lo que veo, me siento feo/a o no suficientemente bueno/a.' },
            { emoji: '💬', texto: 'Me dicen apodos o cosas feas',           prompt: 'Otros niños me dicen apodos o cosas feas sobre cómo soy, y me duele mucho.' },
            { emoji: '🎯', texto: 'No sé en qué soy bueno/a',              prompt: 'No sé qué cosas hago bien. Siento que los demás son mejores que yo en todo.' },
            { emoji: '⚖️', texto: 'Me comparan con otros niños',           prompt: 'Siempre me comparan con mis hermanos o amigos y siento que nunca soy suficiente.' },
            { emoji: '🌈', texto: 'Me siento diferente a todos',            prompt: 'Siento que soy diferente a todos los demás niños y eso me hace sentir raro/a o solo/a.' },
        ]
    },
    'colegio-nino': {
        explicacion: '🏫 El **colegio** es un lugar donde aprendemos muchas cosas — no solo de libros, sino también a relacionarnos, a trabajar en equipo y a conocernos. A veces puede ser difícil o incómodo, y ¡eso está bien hablar!',
        subtemas: [
            { emoji: '🤝', texto: 'No tengo amigos o me siento solo/a',     prompt: 'En el colegio me siento solo/a, no tengo amigos de verdad y no sé cómo hacerlos.' },
            { emoji: '😤', texto: 'Un compañero me molesta o me agrede',    prompt: 'Hay un compañero que me molesta, me pega o me dice cosas feas. No sé qué hacer.' },
            { emoji: '📚', texto: 'Me va muy mal en las clases',             prompt: 'Me está yendo muy mal en el colegio y no entiendo las clases. Eso me pone triste.' },
            { emoji: '😨', texto: 'Me da miedo o ansiedad ir al colegio',   prompt: 'Cuando tengo que ir al colegio siento mucho miedo o ansiedad. No quiero ir.' },
            { emoji: '🧑‍🏫', texto: 'Tengo problemas con un profesor',      prompt: 'Tengo un problema con un profesor que no me trata bien o que no me entiende.' },
        ]
    },
    'cuerpo-nino': {
        explicacion: '🌈 Nuestro **cuerpo** es increíble y cambia con el tiempo — ¡especialmente cuando crecemos! Estos cambios se llaman pubertad. A veces dan vergüenza o confunden, pero son completamente normales. Hablar de ellos ayuda a entenderlos mejor.',
        subtemas: [
            { emoji: '🌱', texto: '¿Por qué me crecen vellos?',              prompt: '¿Por qué me empiezan a crecer vellos en partes del cuerpo? ¿Eso es normal?' },
            { emoji: '😰', texto: '¿Por qué sudo más y huelo diferente?',   prompt: 'Sudo más que antes y a veces mi cuerpo huele diferente. ¿Por qué pasa eso?' },
            { emoji: '🩸', texto: '¿Qué es la menstruación?',               prompt: 'Quiero entender qué es la menstruación y por qué les pasa a las niñas.' },
            { emoji: '📏', texto: 'Estoy creciendo muy rápido (o muy lento)', prompt: 'Siento que estoy creciendo muy diferente a mis amigos. ¿Eso es normal?' },
            { emoji: '😊', texto: 'Mi cuerpo me da vergüenza',              prompt: 'Me da mucha vergüenza mi cuerpo cuando cambia. No sé cómo sentirme con eso.' },
        ]
    },
    'duelo-nino': {
        explicacion: '🕊️ Cuando alguien o algo que queremos mucho se va, sentimos una tristeza muy grande que se llama **duelo**. Es normal llorar, extrañar y confundirse. El duelo no tiene un tiempo fijo — cada persona lo siente a su manera.',
        subtemas: [
            { emoji: '🐾', texto: 'Se murió mi mascota',                     prompt: 'Se murió mi mascota y estoy muy triste. Quiero hablar de lo que siento.' },
            { emoji: '👴', texto: 'Murió un familiar que quería mucho',     prompt: 'Murió alguien de mi familia que quería mucho y no sé cómo manejar ese dolor.' },
            { emoji: '✈️', texto: 'Mi amigo se fue lejos',                  prompt: 'Mi mejor amigo se mudó lejos y lo extraño muchísimo. Me siento muy triste.' },
            { emoji: '❓', texto: '¿Qué es la muerte? No la entiendo',      prompt: 'No entiendo bien qué es la muerte y tengo muchas preguntas sobre eso.' },
            { emoji: '😔', texto: 'Me siento muy solo desde que se fue',    prompt: 'Desde que esa persona se fue, me siento muy solo/a y ya nada es igual.' },
        ]
    },
    'calma-nino': {
        explicacion: '🧘 Calmarse es una **habilidad** — ¡sí, se aprende! Cuando sentimos muchas emociones al mismo tiempo, nuestro cuerpo se pone tenso. Hay trucos increíbles para ayudarle al cuerpo a tranquilizarse. ¡Tú puedes aprender a hacerlo!',
        subtemas: [
            { emoji: '🌬️', texto: 'Quiero aprender a respirar para calmarme', prompt: 'Quiero aprender ejercicios de respiración para calmarme cuando me sienta mal.' },
            { emoji: '💪', texto: 'Mi cuerpo se pone tenso cuando me estreso', prompt: 'Cuando me estreso o me asusto, mi cuerpo se pone muy tenso. ¿Qué puedo hacer?' },
            { emoji: '😴', texto: 'No puedo dormir bien de noche',           prompt: 'Tengo dificultad para dormirme y muchas veces me despierto asustado/a. Quiero aprender a dormir mejor.' },
            { emoji: '🎨', texto: 'Quiero actividades para sentirme mejor', prompt: 'Quiero conocer actividades o juegos que me ayuden a sentirme más tranquilo/a y feliz.' },
            { emoji: '🌊', texto: 'Me siento abrumado/a con muchas cosas',  prompt: 'Siento que tengo demasiadas cosas en la cabeza y me abruma. Necesito ayuda para calmarme.' },
        ]
    },
    'derechos-nino': {
        explicacion: '🤝 Todos los niños y niñas del mundo tienen **derechos**. Eso significa que hay cosas que merecemos solo por ser personas: ser cuidados, ir al colegio, jugar, estar seguros, ser escuchados. ¡Nadie puede quitarte esos derechos!',
        subtemas: [
            { emoji: '📖', texto: '¿Qué derechos tengo como niño/a?',       prompt: '¿Cuáles son mis derechos como niño/a? Quiero conocerlos todos.' },
            { emoji: '✋', texto: 'Alguien no me respeta o me hace daño',   prompt: 'Alguien no me está respetando o me está haciendo daño. ¿Eso está bien? ¿Qué hago?' },
            { emoji: '🛡️', texto: '¿Quién me protege si algo va mal?',     prompt: '¿Quién me puede ayudar si alguien no respeta mis derechos o me hace daño?' },
            { emoji: '🚫', texto: 'Nadie me deja dar mi opinión',           prompt: 'Siento que nadie escucha mi opinión ni me deja decidir nada. ¿Eso está bien?' },
            { emoji: '🌍', texto: '¿Por qué no todos los niños tienen lo mismo?', prompt: '¿Por qué hay niños que no tienen comida, casa o colegio? Eso me preocupa mucho.' },
        ]
    },
    'digital-nino': {
        explicacion: '📱 Los **celulares, videojuegos e internet** son herramientas increíbles, pero también hay cosas que debemos saber para usarlos bien y estar seguros. No todo lo que vemos en pantalla es real, ¡y hay que saber protegerse!',
        subtemas: [
            { emoji: '⏰', texto: 'Me la paso demasiado en el celular',     prompt: 'Me doy cuenta que paso demasiado tiempo en el celular o jugando. No puedo parar fácil.' },
            { emoji: '😨', texto: 'Vi algo en internet que me asustó',      prompt: 'Vi algo en internet o en redes que me asustó o perturbó mucho. No sé qué hacer con eso.' },
            { emoji: '👤', texto: 'Un desconocido me escribió cosas raras', prompt: 'Alguien que no conozco me escribió mensajes raros en redes o en un juego. No sé qué hacer.' },
            { emoji: '😔', texto: 'Me comparo con lo que veo en redes',     prompt: 'Veo fotos en redes y me comparo mucho. Siento que mi vida no es tan buena como la de otros.' },
            { emoji: '🎮', texto: 'Los videojuegos me frustran mucho',      prompt: 'Cuando pierdo en videojuegos me pongo muy bravo/a. A veces me cuesta dejarlo.' },
        ]
    },
    'suenos-nino': {
        explicacion: '💫 Todos tenemos **sueños y talentos** — cosas que nos gustan, en las que somos buenos, cosas que soñamos lograr. ¡Descubrirlos es una aventura! Y lo mejor es que con práctica y esfuerzo, los sueños pueden hacerse realidad.',
        subtemas: [
            { emoji: '🔍', texto: 'No sé qué cosas me gustan o me apasionan', prompt: 'No sé bien qué me gusta hacer o qué me apasiona. Quiero descubrirlo.' },
            { emoji: '🌟', texto: 'Quiero descubrir mis talentos',           prompt: 'Quiero saber en qué soy bueno/a y cuáles son mis talentos especiales.' },
            { emoji: '🚀', texto: 'Tengo un sueño pero no sé si puedo lograrlo', prompt: 'Tengo un sueño grande pero no sé si lo puedo lograr. ¿Cómo empieza uno a cumplir sus sueños?' },
            { emoji: '🎯', texto: 'Quiero tener metas y no sé cómo ponerlas', prompt: 'Quiero tener metas claras para mi vida pero no sé por dónde empezar.' },
            { emoji: '💪', texto: 'Me rindo fácil cuando algo es difícil',  prompt: 'Cuando algo es difícil me rindo rápido. Quiero aprender a ser más perseverante.' },
        ]
    },
};
