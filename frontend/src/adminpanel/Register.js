import React, { } from 'react';
import '../adminpanel/Adminpanel.css'

import { } from 'react-router-dom';

export default function Register() {
    return (
        <div>
                    <head>
                    <meta charset="utf-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta name="description" content="" />
                    <meta name="author" content="" />
                    <title>Dashboard - SB Admin</title>
                    <link href="https://cdn.jsdelivr.net/npm/simple-datatables@7.1.2/dist/style.min.css" rel="stylesheet" />
                    <link href="css/styles.css" rel="stylesheet" />
                    <script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js" crossorigin="anonymous"></script>
                    </head>
                <body class="sb-nav-fixed">
                    <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                        <a class="navbar-brand ps-3" href="/pageadmin">Админпанель</a>
                        <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>
                        <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                            <div class="input-group">
                                <input class="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                                <button class="btn btn-primary" id="btnNavbarSearch" type="button"><i class="fas fa-search"></i></button>
                            </div>
                        </form>

                        <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#!">Settings</a></li>
                                    <li><a class="dropdown-item" href="#!">Activity Log</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#!">Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <div id="layoutSidenav">
                        <div id="layoutSidenav_nav">
                            <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                                <div class="sb-sidenav-menu">
                                    <div class="nav">
                                        <div class="sb-sidenav-menu-heading">Основной</div>
                                        <a class="nav-link" href="index.html">
                                            <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                            Главная страница 
                                        </a>
                                        <a class="nav-link" href="index.html">
                                            <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                            О Нас 
                                        </a>
                                        <a class="nav-link" href="index.html">
                                            <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                            Контакты 
                                        </a>
                                        <a class="nav-link" href="index.html">
                                            <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                            Новости 
                                        </a>
                                        <div class="sb-sidenav-menu-heading">Интерфейс</div>
                                        <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                            <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                                            Макеты
                                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                        </a>
                                        <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                            <nav class="sb-sidenav-menu-nested nav">
                                                <a class="nav-link" href="layout-static.html">Static Navigation</a>
                                                <a class="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                                            </nav>
                                        </div>
                                        <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                            <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
                                            Пользователи
                                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                        </a>
                                        <div class="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                            <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                                <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                                    Authentication
                                                    <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                                </a>
                                                <div class="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                                    <nav class="sb-sidenav-menu-nested nav">
                                                        <a class="nav-link" href="login.html">Login</a>
                                                        <a class="nav-link" href="register.html">Register</a>
                                                        <a class="nav-link" href="password.html">Forgot Password</a>
                                                    </nav>
                                                </div>
                                                <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                                    Error
                                                    <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                                </a>
                                                <div class="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                                    <nav class="sb-sidenav-menu-nested nav">
                                                        <a class="nav-link" href="401.html">401 Page</a>
                                                        <a class="nav-link" href="404.html">404 Page</a>
                                                        <a class="nav-link" href="500.html">500 Page</a>
                                                    </nav>
                                                </div>
                                            </nav>
                                        </div>
                                        <div class="sb-sidenav-menu-heading">Addons</div>
                                        <a class="nav-link" href="charts.html">
                                            <div class="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
                                            Charts
                                        </a>
                                        <a class="nav-link" href="tables.html">
                                            <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                                            Tables
                                        </a>
                                    </div>
                                </div>
                                <div class="sb-sidenav-footer">
                                    <div class="small">Logged in as:</div>
                                    ITHUB
                                </div>
                            </nav>
                        </div>
                    </div>
                </body>

                <main>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-7">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Create Account</h3></div>
                                    <div class="card-body">
                                        <form>
                                            <div class="row mb-3">
                                                <div class="col-md-6">
                                                    <div class="form-floating mb-3 mb-md-0">
                                                        <input class="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" />
                                                        <label for="inputFirstName">First name</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-floating">
                                                        <input class="form-control" id="inputLastName" type="text" placeholder="Enter your last name" />
                                                        <label for="inputLastName">Last name</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input class="form-control" id="inputEmail" type="email" placeholder="name@example.com" />
                                                <label for="inputEmail">Email address</label>
                                            </div>
                                            <div class="row mb-3">
                                                <div class="col-md-6">
                                                    <div class="form-floating mb-3 mb-md-0">
                                                        <input class="form-control" id="inputPassword" type="password" placeholder="Create a password" />
                                                        <label for="inputPassword">Password</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-floating mb-3 mb-md-0">
                                                        <input class="form-control" id="inputPasswordConfirm" type="password" placeholder="Confirm password" />
                                                        <label for="inputPasswordConfirm">Confirm Password</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mt-4 mb-0">
                                                <div class="d-grid"><a class="btn btn-primary btn-block" href="login.html">Create Account</a></div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="card-footer text-center py-3">
                                        <div class="small"><a href="login.html">Have an account? Go to login</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
        </div>
    );
}