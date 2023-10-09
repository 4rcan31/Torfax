# Sistema Operativo en la Nube: Una Visión Innovadora

**Descripción General del Proyecto:**

El propósito fundamental de este proyecto es la creación de un sistema operativo en la nube que ofrezca a los usuarios un entorno seguro y centralizado para administrar sus aplicaciones y datos de manera eficiente. El sistema se basa en el concepto de Inicio de Sesión Único (Single Sign-On, SSO), que permite a los usuarios acceder a una amplia variedad de aplicaciones y servicios en línea mediante una única y segura autenticación de usuario.

**Funcionamiento**

1. **Inicio de Sesión Único (SSO):** El sistema operativo en la nube proporciona a los usuarios la capacidad de iniciar sesión una sola vez, brindándoles acceso a múltiples aplicaciones y servicios en línea de manera segura y sin la necesidad de introducir sus credenciales repetidamente.

   *Ejemplo: Un usuario puede iniciar sesión en el sistema operativo en la nube y, desde allí, acceder a aplicaciones como redes sociales, servicios de correo electrónico, plataformas de colaboración, entre otros, sin tener que ingresar sus credenciales adicionales.*

2. **Gestión de Permisos y Datos:**

   - **Usuarios:** Los usuarios cuentan con un panel de control desde el cual pueden ver una lista de aplicaciones conectadas y administrar los permisos otorgados a cada una de ellas. Esto incluye permisos obligatorios y opcionales para el acceso a sus datos personales.

   *Ejemplo: Los usuarios pueden ver una lista de aplicaciones conectadas y decidir si una aplicación puede acceder a su ubicación, nombre, avatar, etc. También tienen la capacidad de revocar permisos en cualquier momento.*

   - **Desarrolladores de Aplicaciones:** Los desarrolladores pueden conectar sus aplicaciones al sistema operativo en la nube a través de una API que proporciona datos de usuarios autorizados de manera segura.

   *Ejemplo: Un desarrollador de una aplicación de redes sociales puede acceder a datos como el nombre de usuario y el avatar de un usuario autorizado para mostrar en su aplicación.*

3. **Vista de Usuario Final (Usuario Normal):** Los usuarios finales tienen acceso a una interfaz intuitiva desde la cual pueden administrar sus aplicaciones y datos personales de manera centralizada. Pueden ver información detallada sobre las aplicaciones conectadas y tomar decisiones informadas sobre los permisos.

   *Ejemplo: Un usuario puede ver una lista de aplicaciones, revisar los permisos otorgados a cada una y desconectar (desinstalar) aplicaciones o asignar permisos adicionales según sus preferencias.*

    **3.1. Gestor de Archivos en la Nube:**  
        - **Interfaz de Archivos:** Permite a los usuarios gestionar archivos y carpetas en un entorno similar a un explorador de archivos en la nube.  
        - **Formatos de Archivos:** Facilita la apertura de varios tipos de archivos.  
        - **"Abrir Con":** Los usuarios pueden seleccionar aplicaciones para abrir tipos específicos de archivos.  
        - **Integración de Aplicaciones:** Los desarrolladores registran sus aplicaciones para trabajar con tipos de archivos específicos.  

   
   **3.2. Ventanas Emergentes de Aplicaciones:**    
        - **Registro de Aplicaciones:** Los desarrolladores registran aplicaciones y definen acciones que pueden llevarse a cabo en ventanas emergentes dentro de esta aplicacion.  
        - **Ventanas Emergentes Personalizadas:** Permite la creación de ventanas emergentes con interfaces específicas para aplicaciones.  
        - **Comunicación con Aplicaciones:** Proporciona una API para que las ventanas emergentes se comuniquen con la aplicación principal.  
        - **Control de Usuario:** Los usuarios pueden abrir, mover, redimensionar y cerrar ventanas emergentes.  
        - **Seguridad:** Se garantiza la seguridad para prevenir la ejecución de código malicioso en la aplicación principal.  

4. **Vista de Desarrollador de Aplicaciones:** Los desarrolladores de aplicaciones tienen acceso a una plataforma que les permite conectar sus aplicaciones al sistema operativo en la nube y acceder a datos de usuarios autorizados de manera segura. Pueden utilizar esta información para personalizar la experiencia del usuario en sus aplicaciones.

   *Ejemplo: Un desarrollador de una aplicación de compras en línea puede utilizar la API del sistema operativo para acceder al nombre de usuario y al avatar de un usuario autorizado y mostrar recomendaciones de productos personalizadas.*

   **4.1. Plataforma Similar a Vercel:**  
        - **Interfaz de Desarrollo:** Los desarrolladores registran sus aplicaciones y aportan código fuente y recursos.  
        - **Despliegue Automatizado:** Facilita la implementación de aplicaciones, automatizando la compilación y el despliegue.  
        - **Gestión de Versiones:** Permite la gestión de múltiples versiones de aplicaciones.  
        - **Escalabilidad y Recursos:** Maneja la escalabilidad y la eficiencia con contenedores y gestión de recursos.  
        - **Dominios y SSL:** Permite la asignación de dominios personalizados y la configuración de seguridad SSL/TLS.  
        - **Monitoreo y Métricas:** Ofrece herramientas para supervisar el rendimiento y las métricas.  
        - **Gestión de Bases de Datos:** Proporciona servicios de base de datos y almacenamiento para las aplicaciones.  

**Beneficios y Comparaciones**

- El sistema operativo en la nube brinda a los usuarios un control centralizado sobre sus datos y permisos, mejorando la seguridad y la privacidad en línea.

  *Ejemplo: Los usuarios pueden otorgar permisos de ubicación a una aplicación de entrega de alimentos sin revelar otros datos personales innecesarios.*

- Al igual que Google o Facebook ofrecen autenticación SSO en aplicaciones externas, este sistema operativo en la nube permite que las aplicaciones externas se conecten de manera segura a los usuarios sin almacenar datos innecesarios.

  *Ejemplo: Una aplicación de inicio de sesión en línea puede utilizar este sistema para permitir que los usuarios inicien sesión con una única autenticación en varios servicios web.*

Este proyecto se propone simplificar la gestión de aplicaciones y permisos para los usuarios, al tiempo que proporciona a los desarrolladores acceso seguro a los datos de los usuarios para personalizar las experiencias de sus aplicaciones.



# Funcionamiento de un Sistema Operativo

Cuando presionas el botón de encendido en tu computadora, ocurren una serie de eventos críticos que permiten que el sistema operativo se inicie correctamente.

## Inicio del Sistema

Cuando enciendes tu computadora, ocurren una serie de pasos esenciales:

1. **Flujo de Electricidad**: La electricidad fluye desde la fuente de poder hacia los componentes clave, como los discos duros, la placa base y el procesador.

2. **Ejecución de BIOS**: La placa base detecta la electricidad y ejecuta la BIOS (Basic Input Output System), que realiza el proceso POST (Power-on Self-Test) para verificar que todos los componentes de hardware funcionen correctamente.

3. **Carga del Bootloader**: Si el proceso POST no detecta problemas, la BIOS carga el bootloader en la memoria RAM. El bootloader comprueba si hay un sistema operativo en el disco duro y, si lo encuentra, procede a cargarlo.

4. **Arranque del Kernel**: El Kernel es la primera entidad que se ejecuta en el sistema operativo y reside en una ubicación fija en la memoria.

5. **Inicialización del Kernel**: Se inicializan partes clave del Kernel, como la gestión de procesos, la gestión de memoria y la gestión de dispositivos. Además, se configura el entorno necesario para la ejecución del Kernel.

6. **Modo de Usuario y Modo Kernel**: Durante la ejecución, existen dos modos: "Modo de Usuario" y "Modo Kernel". El Kernel se ejecuta en el "Modo Kernel" para otorgar privilegios de ejecución y prioridad.

7. **Planificación de la CPU**: El Kernel decide qué proceso se ejecuta en la CPU en un momento dado. Los procesos pueden realizar llamadas al sistema para solicitar servicios del Kernel.

8. **Administración de Memoria**: El Kernel administra la cantidad de memoria asignada a cada proceso, garantizando un uso eficiente de los recursos.

## Estructura del Kernel

El Kernel es el corazón del sistema operativo y se estructura en capas, desde las más cercanas al hardware hasta las más altas:

1. **Interfaz de Hardware**: Esta capa interactúa directamente con el hardware físico de la computadora y contiene controladores específicos para la CPU, la memoria y otros componentes.

2. **Gestión de Dispositivos**: Aquí, el Kernel facilita la comunicación entre el software y los dispositivos de hardware, como controladores.

3. **Sistema de Archivos**: La gestión de archivos es responsable de administrar la estructura de almacenamiento, incluyendo directorios, archivos y metadatos.

4. **Gestión de Memoria**: El Kernel administra la asignación de memoria física y virtual, incluyendo técnicas como la memoria virtual, la gestión de paginación y la administración de memoria compartida.

    - **Memoria Virtual vs. Física**: La memoria virtual abstrae la memoria física, permitiendo una administración más eficiente al asignar espacio de almacenamiento en disco cuando la memoria física se agota.
    
    - **Gestión de Paginación**: Este mecanismo mejora la eficiencia y la seguridad de la memoria mediante el uso de páginas de memoria.
    
    - **Administración de Memoria Compartida**: Facilita la comunicación y el intercambio de datos entre procesos.

5. **Gestión de Procesos**: El Kernel crea, termina, suspende procesos y asigna recursos como CPU y RAM. También realiza la planificación de la CPU para determinar qué proceso se ejecuta en un momento dado.



# Planificación de Proyecto
- [Video sobre Metodologías de Desarrollo](https://www.youtube.com/watch?v=uxlOPJC3NzY)
    - **Metodologías de Desarrollo**
        - **Metodología de Desarrollo en Cascada**
            - Divide en fases
            - Son dependientes (no se puede desarrollar la fase 2 sin la fase 1)
            - Es poco flexible
            - Requisitos para desarrollar el propio sistema
                - Clientes, formularios
            - Producción
            - Mantenimiento
        - **Metodologías Agile**
            - La base es la evolución
            - Divide el proceso de desarrollo en pequeños bloques
            - El objetivo es llegar a la fase de validación rápidamente
            - Fases incrementales
            - Primero saca una versión funcional
            - Importancia del feedback del cliente

# Análisis y Desarrollo de Software
- [Video sobre Análisis y Desarrollo de Software](https://www.youtube.com/watch?v=s5ABwHaN7as)
    - **Análisis (Entender la necesidad del cliente)**
        - Identificación del problema o necesidad
        - Requerimientos del cliente
    - **Diseño**
        - Arquitectura de software
            - Diagramas de flujo
            - Lenguaje de modelado (UML)
            - Representación gráfica de los requerimientos
            - Identificación de tecnologías a usar
                - Lenguajes de programación
                - Frontend y Backend
                - Figma para UX/UI
    - **Desarrollo**
        - Codificación
    - **Pruebas**
        - Pruebas unitarias
    - **Mantenimiento**
        - Manual del sistema
        - Documentación
        - Aspectos legales

# Equipo de Desarrollo
- [Video sobre el Equipo de Desarrollo](https://www.youtube.com/watch?v=iXy8iG6ANlY)
    - Roles clave:
        - Diseñador
        - UX/UI (Indispensable)
        - Frontend (Indispensable)
        - Backend (Indispensable)
        - Perfil de DevOps
        - Product Manager (Vínculo del cliente con el equipo) (Indispensable)

# Ejemplos
- **Notion**
    - [PYE Community Bot Organization](https://fate-pisces-a9b.notion.site/PYE-Community-bot-23678707105b443ab550405f1553c644)
    - [Project Manager](https://www.notion.so/Project-management-b0da96e986714d9f98319675ed48114c)
    - [Project Manager (Es el que mas me gusta por ahora)](https://heavybold.notion.site/Project-Management-991f375cc58c46dd97c9c6ea27318680)

# Otras Ideas para Organización
- Plataformas recomendadas:
    - Discord
    - Notion


# Diseño frontend que me parecen interesantes
- [El menu del minuto 19 me parece genial](https://www.youtube.com/watch?v=iRQFV2AumA8)

# Sitemas interesantes
- [Laravel frameworkl](https://github.com/laravel/framework/tree/7.x)
