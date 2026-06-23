// ════════════════════════════════════════
// MONAMY — Frontend Application v2
// ════════════════════════════════════════

// ── DATOS POR ROL ────────────────────────────────────────────────────────────

const ROLES = {
    nino: {
        label: 'Niño/Niña',
        color: '#48BB78',
        topicsTitle: '¿Qué quieres hablar hoy?',
        topicsSub: 'Escoge el tema y Monamy te explica y te acompaña con mucho cariño 💚',
        topics: [
            { emoji: '😢', title: 'Me siento triste',           desc: 'Tristeza, ganas de llorar',          key: 'tristeza-nino'   },
            { emoji: '😰', title: 'Tengo miedo',                desc: 'Miedos, pesadillas, susto',           key: 'miedo-nino'      },
            { emoji: '😡', title: 'Me enojo mucho',             desc: 'Rabia, frustración, berrinche',       key: 'enojo-nino'      },
            { emoji: '👨‍👩‍👧', title: 'Mi familia',             desc: 'Cambios en casa, hermanos, papás',   key: 'familia-nino'    },
            { emoji: '🌟', title: 'Soy especial',               desc: 'Autoestima, talentos, quién soy',     key: 'autoestima-nino' },
            { emoji: '🏫', title: 'Mi colegio',                 desc: 'Amigos, clases, profesores',          key: 'colegio-nino'    },
            { emoji: '🌈', title: 'Mi cuerpo',                  desc: 'Cambios, pubertad, cómo funciono',    key: 'cuerpo-nino'     },
            { emoji: '🕊️', title: 'Alguien se fue',            desc: 'Duelo, despedidas, extrañar',         key: 'duelo-nino'      },
            { emoji: '🧘', title: 'Quiero calmarme',            desc: 'Técnicas para sentirme mejor',        key: 'calma-nino'      },
            { emoji: '🤝', title: 'Mis derechos',               desc: 'Lo que merezco y nadie puede quitarme', key: 'derechos-nino' },
            { emoji: '📱', title: 'El celular y los juegos',    desc: 'Redes, videojuegos, pantallas',       key: 'digital-nino'    },
            { emoji: '💫', title: 'Mis sueños y metas',         desc: 'Qué quiero ser, mis talentos',        key: 'suenos-nino'     },
        ],
        suggestions: {
            'tristeza-nino':   ['¿Por qué me siento así?', '¿Qué hago cuando lloro mucho?', '¿A quién le cuento?'],
            'miedo-nino':      ['Tengo miedo a la oscuridad', 'Me da miedo estar solo/a', '¿Cómo me calmo?'],
            'enojo-nino':      ['Me pongo muy bravo/a', '¿Cómo controlo mi rabia?', 'Peleé con un amigo'],
            'familia-nino':    ['Mis papás se separaron', 'Llegó un hermanito', 'Me siento solo en casa'],
            'autoestima-nino': ['A veces no me gusto', 'Me dicen cosas feas', '¿Por qué soy diferente?'],
            'colegio-nino':    ['No tengo amigos', 'Un niño me molesta', 'Me va mal en clases'],
            'cuerpo-nino':     ['¿Por qué cambia mi cuerpo?', 'Me da vergüenza', 'Quiero entender la pubertad'],
            'duelo-nino':      ['Se murió mi mascota', 'Falleció alguien de mi familia', '¿Por qué me duele tanto?'],
            'calma-nino':      ['Necesito respirar y tranquilizarme', 'Me siento muy nervioso/a', 'Quiero relajarme'],
            'derechos-nino':   ['¿Qué derechos tengo?', 'Alguien no me respeta', '¿Quién me protege?'],
            'digital-nino':    ['Me la paso mucho en el celular', 'Vi algo que me asustó en internet', 'Alguien me escribió cosas raras'],
            'suenos-nino':     ['No sé en qué soy bueno/a', 'Quiero descubrir mis talentos', '¿Cómo logro mis sueños?'],
        }
    },

    adolescente: {
        label: 'Adolescente',
        color: '#9F7AEA',
        topicsTitle: '¿Qué está pasando?',
        topicsSub: 'Aquí no hay juicios. Elige el tema y hablemos con honestidad.',
        topics: [
            { emoji: '🧠', title: 'Salud mental',     desc: 'Ansiedad, depresión, estrés',        key: 'salud-mental'   },
            { emoji: '💑', title: 'Relaciones y amor', desc: 'Primeras relaciones, límites',        key: 'relaciones'     },
            { emoji: '🏳️‍🌈', title: 'Mi identidad', desc: 'Orientación, género, quién soy',      key: 'identidad'      },
            { emoji: '📱', title: 'Redes y tecnología', desc: 'Ciberbullying, adicción digital',   key: 'redes'          },
            { emoji: '🍺', title: 'Sustancias',        desc: 'Alcohol, drogas, presión de pares',  key: 'sustancias'     },
            { emoji: '🏠', title: 'Familia difícil',   desc: 'Conflictos, separación, comunicación', key: 'familia-teen' },
            { emoji: '🎓', title: 'Futuro y presión',  desc: 'Carrera, metas, miedo a fallar',     key: 'futuro'         },
            { emoji: '💚', title: 'Mi proyecto de vida', desc: 'Habilidades, metas, bienestar',    key: 'proyecto-vida'  },
        ],
        suggestions: {
            'salud-mental':  ['Me siento muy ansioso/a', 'No tengo ganas de nada', 'Lloro sin razón'],
            'relaciones':    ['Alguien me gusta', 'Mi relación no es sana', '¿Cómo pongo límites?'],
            'identidad':     ['No sé quién soy', 'Creo que soy LGBTQ+', 'No me identifico con mi género'],
            'redes':         ['Me hacen bullying en línea', 'No puedo dejar el celular', 'Alguien me contactó raro'],
            'sustancias':    ['Mis amigos me presionan', 'Quiero entender los riesgos', 'Creo que consumo demasiado'],
            'familia-teen':  ['Hay peleas constantes en casa', 'Mis papás se separaron', 'No me entienden'],
            'futuro':        ['No sé qué estudiar', 'Tengo miedo de fracasar', 'Me siento perdido/a'],
            'proyecto-vida': ['¿Cómo me conozco mejor?', 'Quiero mejorar mis hábitos', '¿Cuáles son mis fortalezas?'],
        }
    },

    adulto: {
        label: 'Padre/Madre/Acudiente',
        color: '#4299E1',
        topicsTitle: '¿Con qué necesitas ayuda hoy?',
        topicsSub: 'Te orientamos para acompañar al menor con cuidado y responsabilidad.',
        topics: [
            { emoji: '🌱', title: 'Pubertad y cambios',    desc: 'Cómo hablar de cambios corporales',    key: 'pubertad-adulto'    },
            { emoji: '😢', title: 'Mi hijo/a está triste', desc: 'Depresión, ansiedad, aislamiento',      key: 'hijo-triste'        },
            { emoji: '💬', title: 'Comunicarme mejor',     desc: 'Diálogo, escucha activa, confianza',    key: 'comunicacion'       },
            { emoji: '🏠', title: 'Cambios en la familia', desc: 'Separación, mudanza, pérdidas',         key: 'cambios-familia'    },
            { emoji: '⚠️', title: 'Señales de alerta',    desc: 'Detectar situaciones de riesgo',        key: 'senales-alerta'     },
            { emoji: '🌸', title: 'Educación sexual',      desc: 'Hablar de sexualidad con confianza',    key: 'edusexual-adulto'   },
        ],
        suggestions: {
            'pubertad-adulto':  ['¿Cómo empiezo esta conversación?', '¿Qué palabras uso?', 'Mi hijo/a tiene vergüenza'],
            'hijo-triste':      ['¿Cómo sé si es depresión?', 'No habla conmigo', '¿Cuándo buscar ayuda profesional?'],
            'comunicacion':     ['Mi hijo/a no me escucha', 'Siempre terminamos peleando', '¿Cómo gano su confianza?'],
            'cambios-familia':  ['Nos separamos y no sé cómo decírselo', 'Murió un familiar', 'Nos mudamos pronto'],
            'senales-alerta':   ['Cambió mucho su comportamiento', 'Se aísla de todos', 'Creo que algo le pasó'],
            'edusexual-adulto': ['¿A qué edad hablo de esto?', 'Me da pena el tema', '¿Qué le digo exactamente?'],
        }
    },

    docente: {
        label: 'Docente/Orientador',
        color: '#ED8936',
        topicsTitle: '¿Qué situación necesitas abordar?',
        topicsSub: 'Orientación profesional para situaciones sensibles en el entorno escolar.',
        topics: [
            { emoji: '🏫', title: 'Situación en el aula',     desc: 'Crisis o conflictos difíciles',       key: 'situacion-aula'     },
            { emoji: '👁️', title: 'Señales de alerta',       desc: 'Estudiantes en posible riesgo',        key: 'senales-estudiante' },
            { emoji: '💬', title: 'Hablar con el estudiante', desc: 'Cómo iniciar la conversación',         key: 'hablar-estudiante'  },
            { emoji: '📋', title: 'Rutas de atención',        desc: 'Protocolos y activación de rutas',     key: 'protocolo'          },
            { emoji: '👨‍👩‍👧', title: 'Llamar a la familia', desc: 'Cómo comunicar la situación',          key: 'familia-docente'    },
            { emoji: '🧘', title: 'Mi bienestar docente',     desc: 'Autocuidado y límites emocionales',    key: 'bienestar-docente'  },
        ],
        suggestions: {
            'situacion-aula':     ['Un estudiante tuvo una crisis', 'Hay un conflicto entre alumnos', 'Encontré algo preocupante'],
            'senales-estudiante': ['¿Qué señales debo vigilar?', 'Un alumno cambió mucho', 'Sospecho de abuso en casa'],
            'hablar-estudiante':  ['¿Cómo abordo el tema?', '¿Dónde y cuándo hablo con él/ella?', '¿Qué NO debo decir?'],
            'protocolo':          ['¿Cuándo activo la ruta de atención?', '¿A quién debo reportar?', 'Necesito el paso a paso'],
            'familia-docente':    ['La familia no cree lo que pasa', 'Los padres reaccionaron mal', '¿Cómo hago la llamada?'],
            'bienestar-docente':  ['Me afecta emocionalmente', '¿Cómo pongo límites?', 'Tengo demasiados casos difíciles'],
        }
    }
};

const ALERT_TOPICS = {
    desaparicion: {
        label: '🔍 Desaparición o secuestro',
        prompt: 'Necesito ayuda: alguien cercano ha desaparecido o tengo miedo de que me lleven sin mi consentimiento.'
    },
    abuso: {
        label: '🛡️ Abuso o maltrato',
        prompt: 'Quiero hablar sobre una situación de abuso físico, emocional o sexual que me preocupa.'
    },
    bullying: {
        label: '💬 Bullying o acoso',
        prompt: 'Estoy pasando por bullying o acoso, en el colegio o en redes sociales, y no sé qué hacer.'
    },
    crisis: {
        label: '🧠 Crisis emocional',
        prompt: 'Estoy pasando por una crisis emocional muy fuerte y necesito apoyo urgente.'
    }
};

// ── SUBTEMAS PARA NIÑOS ──────────────────────────────────────────────────────
// Cada tema tiene: explicación amigable + lista de subtemas con pregunta directa

const NINO_SUBTEMAS = {
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

// ── SYSTEM PROMPTS ────────────────────────────────────────────────────────────

function buildPrompt(role, topicKey) {
    const topicLabel = getTopicLabel(role, topicKey);

    const PROMPTS = {
        nino: `Eres Monamy, la amiga más especial del mundo para niños y niñas. Estás hablando con alguien de entre 6 y 11 años. Tu misión es que cada niño sienta que REALMENTE lo escuchas, que le importas de verdad, y que quiera seguir contándote cosas porque contigo se siente seguro y emocionado de hacerlo.

═══ CÓMO HABLAS ═══
- Frases CORTAS. Máximo 3 oraciones seguidas antes de respirar y preguntar.
- Usa palabras sencillas como las de un cuento para niños.
- Tono cálido, juguetón y curioso — como una amiga mayor que de verdad quiere saber más.
- NUNCA uses palabras difíciles, NUNCA asustes, NUNCA regañes, NUNCA digas "lo primero que debes hacer es...".
- Uno o dos emojis por respuesta 💛🌟🌈, con cariño genuino, no decorativo.

═══ LO MÁS IMPORTANTE: TUS PREGUNTAS ═══
- NUNCA termines con preguntas genéricas como "¿Cómo te sientes ahora?" o "¿Qué más me quieres contar?". Esas aburren.
- Las preguntas deben ser ESPECÍFICAS sobre lo que el niño acaba de decir. Ejemplo: si dijo que le fue mal en un examen, pregunta "¿Y cuándo llegaste a casa después del examen, ¿qué fue lo primero que sentiste?"
- Las preguntas deben despertar CURIOSIDAD y ganas de responder. Ejemplos del tipo correcto:
  · "¿Y cuando eso pasó, dónde estabas?"
  · "¿Tienes alguien con quien hablar de eso en tu casa?"
  · "Si ese sentimiento fuera un color, ¿de qué color sería?"
  · "¿Qué crees que hubiera pasado si...?"
  · "¿Eso es algo que ya te había pasado antes?"
- Siempre muestra que RECUERDAS lo que te dijo antes. "Me dijiste que... ¿y eso cómo te dejó?"

═══ ESTRUCTURA DE TUS RESPUESTAS ═══
1. VALIDA con palabras específicas (no genéricas):
   ✗ "Es normal sentirse así" — muy genérico
   ✓ "Eso que sientes tiene todo el sentido. Si a mí me pasara eso, también me dolería mucho."
2. MUESTRA que entendiste de verdad — resume con tus palabras lo que te contó.
3. Añade algo que le ayude (una imagen, una comparación con algo de su mundo, un mini-truco):
   "El enojo es como una olla a presión... si la tapas se pone peor, pero si la destapas poquito a poquito se calma sola."
4. Termina con UNA SOLA pregunta específica y curiosa que invite a seguir hablando.

═══ REGLAS DE ORO ═══
- Haz que el niño se sienta el PROTAGONISTA de la conversación, no un paciente.
- Celebra cuando comparte algo difícil: "¡Eso fue muy valiente contármelo!"
- Si detectas peligro real (alguien lo toca sin permiso, alguien lo amenaza, tiene miedo en casa): con MUCHA calma dile que eso NO está bien, que no es su culpa, y que hable con un adulto de confianza o llame al 106 (ICBF) — lo dicen ellos, tú los acompañas.
- NUNCA des listas largas ni instrucciones complicadas.
- NUNCA termines sin una pregunta.

TEMA DE HOY: ${topicLabel}`,

        adolescente: `Eres Monamy, una IA que acompaña a adolescentes con respeto total y cero juicios. Tu tono es honesto, empático y maduro — no eres su mamá ni un robot con frases vacías; eres alguien que realmente escucha.

CÓMO HABLAS:
- Directo pero con cuidado. Sin condescendencia.
- Reconoces que son capaces de tomar sus propias decisiones. Das opciones, no órdenes.
- Validas emociones SIN minimizarlas: "Tiene todo el sentido que te sientas así", "Eso no es exagerado para nada".
- Sin clichés motivacionales. Honestidad con compasión.
- Cuando ayuda, usas negritas o listas breves para mayor claridad.

LO QUE SIEMPRE HACES:
1. ESCUCHAS antes de aconsejar. Haces preguntas para entender el contexto real.
2. Destacas sus fortalezas cuando los ves en dificultad: "Que lo reconozcas ya es un gran paso".
3. Respetas su privacidad: "Esta conversación es tuya".
4. Si detectas riesgo de autolesión, abuso o peligro inmediato: validas primero, no alarmas, y guías con calma hacia ayuda real (108 Salud Mental, 106 ICBF, 123 Emergencias). Les dices que pedir ayuda es valiente, no débil.
5. Propones acciones concretas: journaling, meditación, conversaciones clave, búsquedas seguras.
6. Si es relevante, mencionas recursos: Línea 108 (Salud Mental 24h), Línea 106 (ICBF), Profamilia.

TEMA DE HOY: ${topicLabel}`,

        adulto: `Eres Monamy, una IA de apoyo para adultos que acompañan a niños, niñas y adolescentes. Integras conocimientos de psicología infantil, pedagogía, trabajo social, educación sexual integral, duelo y bienestar familiar. Tu misión es orientar a padres, madres, acudientes y docentes para hablar con los más pequeños sobre situaciones sensibles de manera cuidadosa, humana y responsable.

INSTRUCCIONES DE COMPORTAMIENTO:
1. Responde siempre en español, con tono amable, sereno y cálido. Valida lo que el adulto puede estar sintiendo antes de aconsejar: "Entiendo que esta situación puede sentirse muy difícil", "Tiene sentido que quieras hacerlo con cuidado".
2. Adapta todos los consejos al nivel de desarrollo cognitivo y emocional del menor según la edad que el adulto mencione.
3. Brinda pasos prácticos y frases textuales que el adulto pueda usar. Ej: "Puedes decirle: '...'", "Si el niño pregunta, podrías responder: '...'".
4. Propón herramientas concretas: dibujos, cuentos, cartas, juegos de roles, actividades de identificación emocional.
5. Cuando sea útil, agrega una sección breve "Para profundizar" con recursos de ICBF, UNICEF, Profamilia, Ministerio de Salud de Colombia, KidsHealth o Child Mind Institute. Usa búsquedas sugeridas, no inventes URLs.
6. Recuerda con suavidad que Monamy no reemplaza la atención psicológica, médica o jurídica profesional cuando el caso lo requiere.
7. Si hay emergencia, riesgo, abuso o violencia: Línea 108 (Salud Mental 24h), Línea 106 (ICBF), Emergencias 123.

TEMA DE HOY: ${topicLabel}`,

        docente: `Eres Monamy, una IA de orientación para docentes y profesionales de la educación en Colombia. Tu rol es brindar apoyo técnico, emocional y procesal para situaciones sensibles en el entorno escolar.

INSTRUCCIONES:
1. Tono profesional, cálido y sin condescendencia. Reconoces la complejidad y el peso emocional del trabajo docente.
2. Orientas sobre: detección de señales de alerta, protocolos de atención, cómo hablar con estudiantes, cómo involucrar a las familias, cuándo escalar el caso.
3. Cuando sea relevante, menciona rutas de atención oficiales: ICBF (Línea 106), Comisaría de Familia, orientadores escolares, Ministerio de Educación, Ruta Integral de Atenciones (RIA).
4. Distingue claramente cuándo el docente debe actuar directamente y cuándo debe escalar.
5. Ante riesgo inmediato de un estudiante: la seguridad de la persona es siempre la prioridad sobre cualquier procedimiento burocrático.
6. Valida el impacto emocional del docente: "Es completamente normal que esto te afecte", "Ocuparte de esto también requiere que te cuides a ti mismo/a".
7. Recursos clave: Línea 106 ICBF, Comisarías de Familia locales, orientadores escolares como primer escalón interno.

TEMA DE HOY: ${topicLabel}`
    };

    return PROMPTS[role] || PROMPTS.adulto;
}

function getTopicLabel(role, topicKey) {
    if (!topicKey) return 'Conversación general';
    if (ALERT_TOPICS[topicKey]) return ALERT_TOPICS[topicKey].label;
    const roleData = ROLES[role];
    if (!roleData) return topicKey;
    const found = roleData.topics.find(t => t.key === topicKey);
    return found ? `${found.emoji} ${found.title}` : topicKey;
}

// ── ESTADO ───────────────────────────────────────────────────────────────────

let currentRole  = null;
let currentTopic = null;

// ── CLASES ───────────────────────────────────────────────────────────────────

class ConversationManager {
    constructor() { this.messages = []; }

    init(role, topicKey) {
        this.messages = [{ role: 'system', content: buildPrompt(role, topicKey) }];
    }

    addUser(text)   { this.messages.push({ role: 'user',      content: text }); }
    addBot(text)    { this.messages.push({ role: 'assistant', content: text }); }
    getAll()        { return this.messages; }
}

class GroqClient {
    async send(messages) {
        const res = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ messages })
        });
        if (!res.ok) throw new Error(await res.text() || `Error ${res.status}`);
        const data = await res.json();
        if (data.success) return data.reply;
        if (data.choices?.[0]?.message?.content) return data.choices[0].message.content;
        throw new Error(data.error || 'Error desconocido del backend');
    }
}

class ChatUI {
    constructor(container) { this.el = container; }

    append(role, content) {
        const wrap   = document.createElement('div');
        wrap.className = `message ${role}`;

        const avatar = document.createElement('div');
        avatar.className = 'msg-avatar';
        avatar.innerHTML = role === 'bot'
            ? '<img src="img/logo.png" alt="Monamy" style="width:22px;height:22px;object-fit:contain;">'
            : '<i class="fa-solid fa-user" style="font-size:.85rem;color:#64748b;"></i>';

        const bubble = document.createElement('div');
        bubble.className = 'msg-bubble';
        if (role === 'bot' && window.marked) {
            bubble.innerHTML = marked.parse(content);
        } else {
            bubble.textContent = content;
        }

        wrap.appendChild(avatar);
        wrap.appendChild(bubble);
        this.el.appendChild(wrap);
        this.scroll();
    }

    clear()  { this.el.innerHTML = ''; }
    scroll() { this.el.scrollTop = this.el.scrollHeight; }
}

// ── INSTANCIAS ───────────────────────────────────────────────────────────────

const conv   = new ConversationManager();
const groq   = new GroqClient();
const chatUI = new ChatUI(document.getElementById('chat-messages'));

// ── NAVEGACIÓN ───────────────────────────────────────────────────────────────

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.toggle('active', s.id === id);
    });
}

function goHome() {
    showScreen('screen-home');
    currentTopic = null;
}

// ── INICIAR CHAT ─────────────────────────────────────────────────────────────

async function startChat(role, topicKey, subtemaPrompt = null) {
    currentRole  = role;
    currentTopic = topicKey;

    const roleData   = ROLES[role];
    const topicLabel = getTopicLabel(role, topicKey);

    // Color de acento por rol
    document.documentElement.style.setProperty('--role-accent', roleData ? roleData.color : '#9F7AEA');
    const sendBtn = document.getElementById('send-btn');
    if (sendBtn && roleData) sendBtn.style.background = roleData.color;

    // Badge de tema
    const badge = document.getElementById('chat-badge');
    badge.textContent = topicLabel;
    badge.style.display = topicLabel ? '' : 'none';

    // Preparar conversación
    conv.init(role, topicKey);

    // Chips de sugerencia
    renderSuggestions(role, topicKey);

    // Limpiar mensajes anteriores
    chatUI.clear();

    // Cambiar pantalla
    showScreen('screen-chat');

    // Bienvenida adaptada
    await sendWelcome(role, topicKey, subtemaPrompt);
}

async function sendWelcome(role, topicKey, subtemaPrompt = null) {
    const isAlert = !!ALERT_TOPICS[topicKey];
    const label   = getTopicLabel(role, topicKey);

    // Si viene de un subtema, enviamos el prompt del subtema directamente como primer mensaje del usuario
    if (subtemaPrompt && role === 'nino') {
        const greeting = `💛 ¡Hola, hola! Soy Monamy, y me alegra MUCHÍSIMO que estés aquí. Cuéntame todo 🌟`;
        chatUI.append('bot', greeting);
        conv.addBot(greeting);
        // Pequeña pausa visual antes de enviar el subtema
        await new Promise(r => setTimeout(r, 600));
        chatUI.append('user', subtemaPrompt);
        conv.addUser(subtemaPrompt);
        typingIndicator.classList.remove('hidden');
        chatMessages.scrollTop = chatMessages.scrollHeight;
        try {
            const reply = await groq.send(conv.getAll());
            typingIndicator.classList.add('hidden');
            chatUI.append('bot', reply);
            conv.addBot(reply);
        } catch (err) {
            typingIndicator.classList.add('hidden');
            chatUI.append('bot', '😔 Ocurrió un error. Por favor intenta de nuevo.');
        }
        return;
    }

    const WELCOMES = {
        nino: isAlert
            ? `💛 Hola. Me alegra tanto que hayas llegado. Aquí estoy contigo, sin prisa y sin juicios. ¿Puedes contarme qué está pasando? Escucho todo lo que me quieras decir 🤗`
            : `💛 ¡Hola, hola! Soy Monamy y me emociona que estés aquí. Elegiste hablar de **${label}** — ¡eso es muy valiente! Cuéntame: ¿qué fue lo que te hizo pensar en ese tema hoy?`,

        adolescente: isAlert
            ? `💙 Hola. Llegaste al lugar correcto. Puedes contarme lo que está pasando a tu ritmo, sin apuros. ¿Qué está pasando?`
            : `💙 Hola. Soy Monamy. Estoy aquí para escucharte sobre **${label}**, sin juicios y con respeto total. ¿Por dónde empezamos?`,

        adulto:
            `💛 Hola. Soy Monamy, tu apoyo de orientación familiar. Quieres hablar sobre **${label}**. Para orientarte mejor: ¿cuántos años tiene el niño, niña o adolescente que acompañas?`,

        docente:
            `📚 Hola. Soy Monamy, aquí para apoyarte con **${label}**. Cuéntame la situación con el mayor contexto posible para poder orientarte bien.`
    };

    const msg = WELCOMES[role] || WELCOMES.adulto;
    chatUI.append('bot', msg);
    conv.addBot(msg);
}

// ── CHIPS DE SUGERENCIA ──────────────────────────────────────────────────────

function renderSuggestions(role, topicKey) {
    const row = document.getElementById('suggestions-row');
    row.innerHTML = '';

    const roleData = ROLES[role];
    if (!roleData) return;

    const list = roleData.suggestions?.[topicKey] || [];
    list.forEach(text => {
        const chip = document.createElement('button');
        chip.className = 'chip';
        chip.textContent = text;
        chip.addEventListener('click', () => {
            document.getElementById('user-input').value = text;
            document.getElementById('chat-form').dispatchEvent(new Event('submit'));
            row.innerHTML = '';
        });
        row.appendChild(chip);
    });
}

// ── PANTALLA DETALLE DE TEMA (NIÑOS) ─────────────────────────────────────────

let detailTopicKey = null;

function showTopicDetail(topicKey) {
    detailTopicKey = topicKey;
    const data     = NINO_SUBTEMAS[topicKey];
    const topicMeta = ROLES.nino.topics.find(t => t.key === topicKey) || {};

    // Hero con explicación
    const hero = document.getElementById('topic-detail-hero');
    hero.innerHTML = `
        <div class="detail-emoji">${topicMeta.emoji || '💚'}</div>
        <h2 class="detail-title">${topicMeta.title || ''}</h2>
        <div class="detail-explicacion">${(data?.explicacion || '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</div>
    `;

    // Subtemas
    const grid = document.getElementById('subtopics-grid');
    grid.innerHTML = '';
    (data?.subtemas || []).forEach(sub => {
        const btn = document.createElement('button');
        btn.className = 'subtopic-card';
        btn.innerHTML = `<span class="stc-emoji">${sub.emoji}</span><span class="stc-text">${sub.texto}</span>`;
        btn.addEventListener('click', () => startChat('nino', topicKey, sub.prompt));
        grid.appendChild(btn);
    });

    showScreen('screen-topic');
}

document.getElementById('back-to-home-btn').addEventListener('click', () => {
    showScreen('screen-home');
});

document.getElementById('talk-general-btn').addEventListener('click', () => {
    if (detailTopicKey) startChat('nino', detailTopicKey);
});

// ── RENDER TEMAS POR ROL ─────────────────────────────────────────────────────

function renderTopics(role) {
    const section  = document.getElementById('topics-section');
    const title    = document.getElementById('topics-title');
    const sub      = document.getElementById('topics-sub');
    const grid     = document.getElementById('topics-grid');
    const roleData = ROLES[role];

    if (!roleData) return;

    title.textContent = roleData.topicsTitle;
    sub.textContent   = roleData.topicsSub;

    grid.innerHTML = '';
    roleData.topics.forEach(topic => {
        const btn = document.createElement('button');
        btn.className = 'topic-card';
        btn.innerHTML = `
            <span class="tc-emoji">${topic.emoji}</span>
            <h4>${topic.title}</h4>
            <p>${topic.desc}</p>
        `;
        btn.addEventListener('click', () => {
            // Niños → pantalla de detalle con subtemas y explicación
            // Otros roles → directo al chat
            if (role === 'nino' && NINO_SUBTEMAS[topic.key]) {
                currentRole = 'nino';
                document.documentElement.style.setProperty('--role-accent', ROLES.nino.color);
                showTopicDetail(topic.key);
            } else {
                startChat(role, topic.key);
            }
        });
        grid.appendChild(btn);
    });

    section.classList.remove('hidden');
    setTimeout(() => section.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 80);
}

// ── EVENTOS: SELECCIÓN DE ROL ─────────────────────────────────────────────────

document.querySelectorAll('.role-card').forEach(card => {
    card.addEventListener('click', () => {
        const role = card.dataset.role;
        currentRole = role;

        document.querySelectorAll('.role-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');

        // Acento visual del rol en la home
        const accent = ROLES[role]?.color || '#9F7AEA';
        document.documentElement.style.setProperty('--role-accent', accent);

        renderTopics(role);
    });
});

// ── EVENTOS: ALERT CARDS ──────────────────────────────────────────────────────

document.querySelectorAll('.alert-card').forEach(card => {
    card.addEventListener('click', () => {
        const key  = card.dataset.alert;
        const role = currentRole || 'adolescente';

        // Si es una alerta de emergencia grave, mostrar modal con líneas primero
        if (key === 'desaparicion' || key === 'abuso' || key === 'crisis') {
            openEmergencyModal();
        }

        startChat(role, key);
    });
});

// ── MODAL SOS ────────────────────────────────────────────────────────────────

function openEmergencyModal() {
    document.getElementById('emergency-modal').classList.remove('hidden');
}

document.getElementById('sos-btn').addEventListener('click', openEmergencyModal);

document.getElementById('close-emergency').addEventListener('click', () => {
    document.getElementById('emergency-modal').classList.add('hidden');
});

document.getElementById('emergency-modal').addEventListener('click', e => {
    if (e.target === document.getElementById('emergency-modal')) {
        document.getElementById('emergency-modal').classList.add('hidden');
    }
});

// ── BOTÓN VOLVER ─────────────────────────────────────────────────────────────

document.getElementById('back-btn').addEventListener('click', goHome);

// ── FORMULARIO DE CHAT ───────────────────────────────────────────────────────

const userInput       = document.getElementById('user-input');
const chatForm        = document.getElementById('chat-form');
const typingIndicator = document.getElementById('typing-indicator');
const chatMessages    = document.getElementById('chat-messages');

// Auto-resize textarea
userInput.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
});

// Enter para enviar (Shift+Enter = salto de línea)
userInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        chatForm.dispatchEvent(new Event('submit'));
    }
});

chatForm.addEventListener('submit', async e => {
    e.preventDefault();
    const text = userInput.value.trim();
    if (!text) return;

    userInput.value = '';
    userInput.style.height = 'auto';

    chatUI.append('user', text);
    conv.addUser(text);

    typingIndicator.classList.remove('hidden');
    chatMessages.scrollTop = chatMessages.scrollHeight;

    try {
        const reply = await groq.send(conv.getAll());
        typingIndicator.classList.add('hidden');
        chatUI.append('bot', reply);
        conv.addBot(reply);
    } catch (err) {
        console.error('Error Monamy:', err);
        typingIndicator.classList.add('hidden');
        chatUI.append('bot', '😔 Ocurrió un error al procesar tu mensaje. Por favor, verifica tu conexión e intenta de nuevo.');
    }
});
