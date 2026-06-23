package com.example.monamy.model;

/**
 * Enumeración que representa los roles disponibles para el usuario.
 * Cada rol determina el enfoque de orientación que la IA proporcionará.
 */
public enum RolUsuario {

    PADRE_MADRE("Padre/Madre", "Orientación enfocada en el vínculo parental y la crianza"),
    ACUDIENTE("Acudiente", "Apoyo para cuidadores y tutores legales"),
    DOCENTE("Docente", "Herramientas pedagógicas para el aula");

    private final String nombre;
    private final String descripcion;

    RolUsuario(String nombre, String descripcion) {
        this.nombre = nombre;
        this.descripcion = descripcion;
    }

    public String getNombre() {
        return nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }
}
