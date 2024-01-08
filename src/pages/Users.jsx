//import { useState } from "react";
import { UsersList } from "../components";

const Users = () => {
    // Ejemplo de datos de usuarios
    const usuarios = [
        { id: 1, nombre: 'Usuario1', rol: 'Usuario', fotoPerfil: 'https://i.pinimg.com/564x/87/3c/00/873c0044571fd5afbf1d60b16834575c.jpg' },
        { id: 2, nombre: 'Usuario2', rol: 'Administrador', fotoPerfil: 'https://i.pinimg.com/564x/9e/d0/07/9ed0073bd902b49a30a47ad4de621cf8.jpg' },
        { id: 3, nombre: 'Usuario3', rol: 'Administrador', fotoPerfil: 'https://i.pinimg.com/564x/e2/40/7e/e2407e6d6bc88cf983af9b5bc5cf9d1a.jpg' },
        { id: 4, nombre: 'Usuario4', rol: 'Usuario', fotoPerfil: 'https://i.pinimg.com/564x/09/89/1b/09891bdb608edccf4baa2b62bc2de704.jpg' },
        { id: 5, nombre: 'Usuario5', rol: 'Usuario', fotoPerfil: 'https://i.pinimg.com/564x/10/bd/a4/10bda422c0b7fb9c2eadd2deef5aec8a.jpg' },
        { id: 6, nombre: 'Usuario6', rol: 'Usuario', fotoPerfil: 'https://i.pinimg.com/564x/09/89/1b/09891bdb608edccf4baa2b62bc2de704.jpg' },
        // Agrega más usuarios según sea necesario
    ];

    const handleEditarRol = (userId) => {
        // Lógica para editar el rol del usuario con el ID userId
        console.log(`Editar rol del usuario con ID: ${userId}`);
    };

    return (
        <div className="container mx-auto p-8 bg-principalCol">
            <UsersList usuarios={usuarios} onEditarRol={handleEditarRol} />
        </div>
    );
}

export default Users