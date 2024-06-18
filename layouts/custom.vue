<!-- custom layout -->

<template>
    <div>
      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-danger">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">My-App</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 flex ">
                <li class="nav-item">
                  <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
                </li>
              </ul>
            </div>
          </div>
         </nav>
      </header>
       <div>
        <slot />
       </div>
      <footer class="bg-light text-center text-lg-start">
          <div class="container p-4">
            <p class="text-center">&copy; 2024 Your Company. All rights reserved.</p>
          </div>
      </footer>
    </div>
</template>