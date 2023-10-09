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
