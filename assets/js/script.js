document.addEventListener("DOMContentLoaded", function () {
  const Dashboard = document.getElementById("Dashboard");
  const content = document.getElementById("content");
  const addList = document.getElementById("addList");
  const addClass = document.getElementById("addClass");
  const studentSection = document.getElementById("studentSection");
  const teacherSection = document.getElementById("teacherSection");
  const user = [
    {
      class: "10A",
      name: "John Doe",
      roll_no: 1,
      marks: {
        math: 85,
        science: 90,
        english: 88,
      },
    },
    {
      class: "10A",
      name: "Jane Smith",
      roll_no: 2,
      marks: {
        math: 78,
        science: 82,
        english: 91,
      },
    },
    {
      class: "10A",
      name: "Mike Johnson",
      roll_no: 3,
      marks: {
        math: 92,
        science: 89,
        english: 84,
      },
    },
    {
      class: "10A",
      name: "Emily Davis",
      roll_no: 4,
      marks: {
        math: 88,
        science: 94,
        english: 90,
      },
    },
    {
      class: "10A",
      name: "Chris Lee",
      roll_no: 5,
      marks: {
        math: 76,
        science: 85,
        english: 80,
      },
    },
    {
      class: "10A",
      name: "Anna Kim",
      roll_no: 6,
      marks: {
        math: 90,
        science: 92,
        english: 95,
      },
    },
    {
      class: "10A",
      name: "David Brown",
      roll_no: 7,
      marks: {
        math: 84,
        science: 88,
        english: 87,
      },
    },
    {
      class: "10A",
      name: "Sophia Wilson",
      roll_no: 8,
      marks: {
        math: 89,
        science: 91,
        english: 92,
      },
    },
    {
      class: "10A",
      name: "James Martinez",
      roll_no: 9,
      marks: {
        math: 80,
        science: 86,
        english: 85,
      },
    },
    {
      class: "10A",
      name: "Olivia Anderson",
      roll_no: 10,
      marks: {
        math: 95,
        science: 93,
        english: 94,
      },
    },
  ];

  // End Dummy Data

  let tableRows = "";
  user.forEach((student) => {
    tableRows += `
          <tr class="border-b border-gray-200 hover:bg-gray-100">
              <td class="py-3 px-6 text-left whitespace-nowrap">${student.class}</td>
              <td class="py-3 px-6 text-left">
                  <div class="flex items-center">
                      <div class="mr-2">
                          <img class="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/${student.roll_no}.jpg" alt="${student.name}"/>
                      </div>
                      <span>${student.name}</span>
                  </div>
              </td>
              <td class="py-3 px-6 text-center">${student.roll_no}</td>
              <td class="py-3 px-6 text-center">Math: ${student.marks.math}, Science: ${student.marks.science}, English: ${student.marks.english}</td>
              <td class="py-3 px-6 text-center">
                  <div class="flex item-center justify-center">
                      <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                      </div>
                      <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                      </div>
                      <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                      </div>
                  </div>
              </td>
          </tr>
      `;
  });
  content.innerHTML = `
  <section class="max-w-7xl mx-auto py-4 px-5">
              <div class="flex justify-between items-center border-b border-gray-300">
                  <h1 class="text-2xl font-semibold pt-2 pb-6">Dashboard</h1>
              </div>

              <!-- STATISTICS -->
              <div class="grid grid-cols-1 md:grid-cols-4 gap-4 py-6">
                  <div class="bg-white shadow rounded-sm flex justify-between items-center py-3.5 px-3.5">
                      <div class="space-y-2">
                          <p class="text-xs text-gray-400 uppercase">Value</p>
                          <div class="flex items-center space-x-2">
                              <h1 class="text-xl font-semibold">$13,500</h1>
                              <p class="text-xs bg-green-50 text-green-500 px-1 rounded">+4.5</p>
                          </div>
                      </div>
                      <svg class="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>

                  <div class="bg-white shadow rounded-sm flex justify-between items-center py-3.5 px-3.5">
                      <div class="space-y-2">
                          <p class="text-xs text-gray-400 uppercase">Users</p>
                          <div class="flex items-center space-x-2">
                              <h1 class="text-xl font-semibold">819</h1>
                              <p class="text-xs bg-green-50 text-green-500 px-1 rounded">+7.4</p>
                          </div>
                      </div>
                      <svg class="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>                    
                  </div>

                  <div class="bg-white shadow rounded-sm flex justify-between items-center py-3.5 px-3.5">
                      <div class="space-y-2">
                          <p class="text-xs text-gray-400 uppercase">Orders</p>
                          <div class="flex items-center space-x-2">
                              <h1 class="text-xl font-semibold">121</h1>
                              <p class="text-xs bg-red-50 text-red-500 px-1 rounded">-2.9</p>
                          </div>
                      </div>
                      <svg class="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                  </div>

                  <div class="bg-white shadow rounded-sm flex justify-between items-center py-3.5 px-3.5">
                      <div class="space-y-2">
                          <p class="text-xs text-gray-400 uppercase">Tickets</p>
                          <div class="flex items-center space-x-2">
                              <h1 class="text-xl font-semibold">243</h1>
                              <p class="text-xs bg-green-50 text-green-500 px-1 rounded">+3.1</p>
                          </div>
                      </div>
                      <svg class="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path></svg>
                  </div>
              </div>
              <!-- END OF STATISTICS -->
              
              <!-- TABLE -->
              <div class="bg-white shadow rounded-sm my-2.5 overflow-x-auto">
                  <table class="min-w-max w-full table-auto">
                      <thead>
                          <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                              <th class="py-3 px-6 text-left">Class</th>
                              <th class="py-3 px-6 text-left">Name</th>
                              <th class="py-3 px-6 text-center">Roll No.</th>
                              <th class="py-3 px-6 text-center">Marks</th>
                              <th class="py-3 px-6 text-center">Actions</th>
                          </tr>
                      </thead>
                        <tbody class="text-gray-600 text-sm">
                      ${tableRows}
                  </tbody>
                  </table>
              </div>
              <!-- END OF TABLE -->

              
          </section>
          <!-- END OF PAGE CONTENT -->
  `;

  Dashboard.addEventListener("click", function (event) {
    event.preventDefault();
    const user = [
      {
        class: "10A",
        name: "John Doe",
        roll_no: 1,
        marks: {
          math: 85,
          science: 90,
          english: 88,
        },
      },
      {
        class: "10A",
        name: "Jane Smith",
        roll_no: 2,
        marks: {
          math: 78,
          science: 82,
          english: 91,
        },
      },
      {
        class: "10A",
        name: "Mike Johnson",
        roll_no: 3,
        marks: {
          math: 92,
          science: 89,
          english: 84,
        },
      },
      {
        class: "10A",
        name: "Emily Davis",
        roll_no: 4,
        marks: {
          math: 88,
          science: 94,
          english: 90,
        },
      },
      {
        class: "10A",
        name: "Chris Lee",
        roll_no: 5,
        marks: {
          math: 76,
          science: 85,
          english: 80,
        },
      },
      {
        class: "10A",
        name: "Anna Kim",
        roll_no: 6,
        marks: {
          math: 90,
          science: 92,
          english: 95,
        },
      },
      {
        class: "10A",
        name: "David Brown",
        roll_no: 7,
        marks: {
          math: 84,
          science: 88,
          english: 87,
        },
      },
      {
        class: "10A",
        name: "Sophia Wilson",
        roll_no: 8,
        marks: {
          math: 89,
          science: 91,
          english: 92,
        },
      },
      {
        class: "10A",
        name: "James Martinez",
        roll_no: 9,
        marks: {
          math: 80,
          science: 86,
          english: 85,
        },
      },
      {
        class: "10A",
        name: "Olivia Anderson",
        roll_no: 10,
        marks: {
          math: 95,
          science: 93,
          english: 94,
        },
      },
    ];

    // End Dummy Data

    let tableRows = "";
    user.forEach((student) => {
      tableRows += `
            <tr class="border-b border-gray-200 hover:bg-gray-100">
                <td class="py-3 px-6 text-left whitespace-nowrap">${student.class}</td>
                <td class="py-3 px-6 text-left">
                    <div class="flex items-center">
                        <div class="mr-2">
                            <img class="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/${student.roll_no}.jpg" alt="${student.name}"/>
                        </div>
                        <span>${student.name}</span>
                    </div>
                </td>
                <td class="py-3 px-6 text-center">${student.roll_no}</td>
                <td class="py-3 px-6 text-center">Math: ${student.marks.math}, Science: ${student.marks.science}, English: ${student.marks.english}</td>
                <td class="py-3 px-6 text-center">
                    <div class="flex item-center justify-center">
                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div>
                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                        </div>
                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </div>
                    </div>
                </td>
            </tr>
        `;
    });
    content.innerHTML = `
    <section class="max-w-7xl mx-auto py-4 px-5">
                <div class="flex justify-between items-center border-b border-gray-300">
                    <h1 class="text-2xl font-semibold pt-2 pb-6">Dashboard</h1>
                </div>
  
                <!-- STATISTICS -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4 py-6">
                    <div class="bg-white shadow rounded-sm flex justify-between items-center py-3.5 px-3.5">
                        <div class="space-y-2">
                            <p class="text-xs text-gray-400 uppercase">Value</p>
                            <div class="flex items-center space-x-2">
                                <h1 class="text-xl font-semibold">$13,500</h1>
                                <p class="text-xs bg-green-50 text-green-500 px-1 rounded">+4.5</p>
                            </div>
                        </div>
                        <svg class="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
  
                    <div class="bg-white shadow rounded-sm flex justify-between items-center py-3.5 px-3.5">
                        <div class="space-y-2">
                            <p class="text-xs text-gray-400 uppercase">Users</p>
                            <div class="flex items-center space-x-2">
                                <h1 class="text-xl font-semibold">819</h1>
                                <p class="text-xs bg-green-50 text-green-500 px-1 rounded">+7.4</p>
                            </div>
                        </div>
                        <svg class="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>                    
                    </div>
  
                    <div class="bg-white shadow rounded-sm flex justify-between items-center py-3.5 px-3.5">
                        <div class="space-y-2">
                            <p class="text-xs text-gray-400 uppercase">Orders</p>
                            <div class="flex items-center space-x-2">
                                <h1 class="text-xl font-semibold">121</h1>
                                <p class="text-xs bg-red-50 text-red-500 px-1 rounded">-2.9</p>
                            </div>
                        </div>
                        <svg class="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                    </div>
  
                    <div class="bg-white shadow rounded-sm flex justify-between items-center py-3.5 px-3.5">
                        <div class="space-y-2">
                            <p class="text-xs text-gray-400 uppercase">Tickets</p>
                            <div class="flex items-center space-x-2">
                                <h1 class="text-xl font-semibold">243</h1>
                                <p class="text-xs bg-green-50 text-green-500 px-1 rounded">+3.1</p>
                            </div>
                        </div>
                        <svg class="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path></svg>
                    </div>
                </div>
                <!-- END OF STATISTICS -->
                
                <!-- TABLE -->
                <div class="bg-white shadow rounded-sm my-2.5 overflow-x-auto">
                    <table class="min-w-max w-full table-auto">
                        <thead>
                            <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th class="py-3 px-6 text-left">Class</th>
                                <th class="py-3 px-6 text-left">Name</th>
                                <th class="py-3 px-6 text-center">Roll No.</th>
                                <th class="py-3 px-6 text-center">Marks</th>
                                <th class="py-3 px-6 text-center">Actions</th>
                            </tr>
                        </thead>
                          <tbody class="text-gray-600 text-sm">
                        ${tableRows}
                    </tbody>
                    </table>
                </div>
                <!-- END OF TABLE -->
  
                
            </section>
            <!-- END OF PAGE CONTENT -->
    `;
  });

  addList.addEventListener("click", function (event) {
    event.preventDefault();
    // Dummy Data
    const user = [
      {
        class: "10A",
        name: "John Doe",
        roll_no: 1,
        marks: {
          math: 85,
          science: 90,
          english: 88,
        },
      },
      {
        class: "10A",
        name: "Jane Smith",
        roll_no: 2,
        marks: {
          math: 78,
          science: 82,
          english: 91,
        },
      },
      {
        class: "10A",
        name: "Mike Johnson",
        roll_no: 3,
        marks: {
          math: 92,
          science: 89,
          english: 84,
        },
      },
      {
        class: "10A",
        name: "Emily Davis",
        roll_no: 4,
        marks: {
          math: 88,
          science: 94,
          english: 90,
        },
      },
      {
        class: "10A",
        name: "Chris Lee",
        roll_no: 5,
        marks: {
          math: 76,
          science: 85,
          english: 80,
        },
      },
      {
        class: "10A",
        name: "Anna Kim",
        roll_no: 6,
        marks: {
          math: 90,
          science: 92,
          english: 95,
        },
      },
      {
        class: "10A",
        name: "David Brown",
        roll_no: 7,
        marks: {
          math: 84,
          science: 88,
          english: 87,
        },
      },
      {
        class: "10A",
        name: "Sophia Wilson",
        roll_no: 8,
        marks: {
          math: 89,
          science: 91,
          english: 92,
        },
      },
      {
        class: "10A",
        name: "James Martinez",
        roll_no: 9,
        marks: {
          math: 80,
          science: 86,
          english: 85,
        },
      },
      {
        class: "10A",
        name: "Olivia Anderson",
        roll_no: 10,
        marks: {
          math: 95,
          science: 93,
          english: 94,
        },
      },
    ];

    // End Dummy Data

    let tableRows = "";
    user.forEach((student) => {
      tableRows += `
              <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-left whitespace-nowrap">${student.class}</td>
                  <td class="py-3 px-6 text-left">
                      <div class="flex items-center">
                          <div class="mr-2">
                              <img class="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/${student.roll_no}.jpg" alt="${student.name}"/>
                          </div>
                          <span>${student.name}</span>
                      </div>
                  </td>
                  <td class="py-3 px-6 text-center">${student.roll_no}</td>
                  <td class="py-3 px-6 text-center">Math: ${student.marks.math}, Science: ${student.marks.science}, English: ${student.marks.english}</td>
                  <td class="py-3 px-6 text-center">
                      <div class="flex item-center justify-center">
                          <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                          </div>
                          <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                              </svg>
                          </div>
                          <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                          </div>
                      </div>
                  </td>
              </tr>
          `;
    });

    content.innerHTML = `<!-- TABLE -->
                <div class="bg-white shadow rounded-sm my-2.5 overflow-x-auto">
                    <table class="min-w-max w-full table-auto">
                        <thead>
                            <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th class="py-3 px-6 text-left">Class</th>
                                <th class="py-3 px-6 text-left">Name</th>
                                <th class="py-3 px-6 text-center">Roll No.</th>
                                <th class="py-3 px-6 text-center">Marks</th>
                                <th class="py-3 px-6 text-center">Actions</th>
                            </tr>
                        </thead>
                          <tbody class="text-gray-600 text-sm">
                        ${tableRows}
                    </tbody>
                    </table>
                </div>
                <!-- END OF TABLE -->`;
  });

  addClass.addEventListener("click", function (event) {
    event.preventDefault();

    content.innerHTML = ` <div class="w-full h-screen  flex justify-center items-center">
      <div class="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
        <h2 class="text-2xl font-semibold mb-4">Add Class</h2>
        <form id="addClassForm" class="space-y-4">
          <div>
            <label
              for="className"
              class="block text-sm font-medium text-gray-700"
              >Class Name</label
            >
            <input
              type="text"
              id="className"
              name="className"
              required
              class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              for="teacherName"
              class="block text-sm font-medium text-gray-700"
              >Teacher Name</label
            >
            <input
              type="text"
              id="teacherName"
              name="teacherName"
              required
              class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            class="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Add Class
          </button>
        </form>
      </div>
    </div>`;

    document
      .getElementById("addClassForm")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        const className = document.getElementById("className").value;
        const teacherName = document.getElementById("teacherName").value;

        alert(`Class Name: ${className}\nTeacher Name: ${teacherName}`);
      });
  });

  studentSection.addEventListener("click", function (event) {
    event.preventDefault();
    // Dummy Data
    const user = [
      {
        class: "10A",
        name: "John Doe",
        roll_no: 1,
        marks: {
          math: 85,
          science: 90,
          english: 88,
        },
      },
      {
        class: "10A",
        name: "Jane Smith",
        roll_no: 2,
        marks: {
          math: 78,
          science: 82,
          english: 91,
        },
      },
      {
        class: "10A",
        name: "Mike Johnson",
        roll_no: 3,
        marks: {
          math: 92,
          science: 89,
          english: 84,
        },
      },
      {
        class: "10A",
        name: "Emily Davis",
        roll_no: 4,
        marks: {
          math: 88,
          science: 94,
          english: 90,
        },
      },
      {
        class: "10A",
        name: "Chris Lee",
        roll_no: 5,
        marks: {
          math: 76,
          science: 85,
          english: 80,
        },
      },
      {
        class: "10A",
        name: "Anna Kim",
        roll_no: 6,
        marks: {
          math: 90,
          science: 92,
          english: 95,
        },
      },
      {
        class: "10A",
        name: "David Brown",
        roll_no: 7,
        marks: {
          math: 84,
          science: 88,
          english: 87,
        },
      },
      {
        class: "10A",
        name: "Sophia Wilson",
        roll_no: 8,
        marks: {
          math: 89,
          science: 91,
          english: 92,
        },
      },
      {
        class: "10A",
        name: "James Martinez",
        roll_no: 9,
        marks: {
          math: 80,
          science: 86,
          english: 85,
        },
      },
      {
        class: "10A",
        name: "Olivia Anderson",
        roll_no: 10,
        marks: {
          math: 95,
          science: 93,
          english: 94,
        },
      },
    ];

    // End Dummy Data

    let tableRows = "";
    user.forEach((student) => {
      tableRows += `
                <tr class="border-b border-gray-200 hover:bg-gray-100">
                    <td class="py-3 px-6 text-left whitespace-nowrap">${student.class}</td>
                    <td class="py-3 px-6 text-left">
                        <div class="flex items-center">
                            <div class="mr-2">
                                <img class="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/${student.roll_no}.jpg" alt="${student.name}"/>
                            </div>
                            <span>${student.name}</span>
                        </div>
                    </td>
                    <td class="py-3 px-6 text-center">${student.roll_no}</td>
                    <td class="py-3 px-6 text-center">Math: ${student.marks.math}, Science: ${student.marks.science}, English: ${student.marks.english}</td>
                    <td class="py-3 px-6 text-center">
                        <div class="flex item-center justify-center">
                            <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                            </div>
                            <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </div>
                        </div>
                    </td>
                </tr>
            `;
    });

    content.innerHTML = `<!-- TABLE -->
                  <div class="bg-white shadow rounded-sm my-2.5 overflow-x-auto">
                      <table class="min-w-max w-full table-auto">
                          <thead>
                              <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                  <th class="py-3 px-6 text-left">Class</th>
                                  <th class="py-3 px-6 text-left">Name</th>
                                  <th class="py-3 px-6 text-center">Roll No.</th>
                                  <th class="py-3 px-6 text-center">Marks</th>
                                  <th class="py-3 px-6 text-center">Actions</th>
                              </tr>
                          </thead>
                            <tbody class="text-gray-600 text-sm">
                          ${tableRows}
                      </tbody>
                      </table>
                  </div>
                  <!-- END OF TABLE -->`;
  });

  teacherSection.addEventListener("click", function (event) {
    event.preventDefault();
    // Dummy Data
    const user = [
      {
        class: "10A",
        name: "John Doe",
        roll_no: 1,
        marks: {
          math: 85,
          science: 90,
          english: 88,
        },
      },
      {
        class: "10A",
        name: "Jane Smith",
        roll_no: 2,
        marks: {
          math: 78,
          science: 82,
          english: 91,
        },
      },
      {
        class: "10A",
        name: "Mike Johnson",
        roll_no: 3,
        marks: {
          math: 92,
          science: 89,
          english: 84,
        },
      },
      {
        class: "10A",
        name: "Emily Davis",
        roll_no: 4,
        marks: {
          math: 88,
          science: 94,
          english: 90,
        },
      },
      {
        class: "10A",
        name: "Chris Lee",
        roll_no: 5,
        marks: {
          math: 76,
          science: 85,
          english: 80,
        },
      },
      {
        class: "10A",
        name: "Anna Kim",
        roll_no: 6,
        marks: {
          math: 90,
          science: 92,
          english: 95,
        },
      },
      {
        class: "10A",
        name: "David Brown",
        roll_no: 7,
        marks: {
          math: 84,
          science: 88,
          english: 87,
        },
      },
      {
        class: "10A",
        name: "Sophia Wilson",
        roll_no: 8,
        marks: {
          math: 89,
          science: 91,
          english: 92,
        },
      },
      {
        class: "10A",
        name: "James Martinez",
        roll_no: 9,
        marks: {
          math: 80,
          science: 86,
          english: 85,
        },
      },
      {
        class: "10A",
        name: "Olivia Anderson",
        roll_no: 10,
        marks: {
          math: 95,
          science: 93,
          english: 94,
        },
      },
    ];

    // End Dummy Data

    let tableRows = "";
    user.forEach((student) => {
      tableRows += `
                <tr class="border-b border-gray-200 hover:bg-gray-100">
                    <td class="py-3 px-6 text-left whitespace-nowrap">${student.class}</td>
                    <td class="py-3 px-6 text-left">
                        <div class="flex items-center">
                            <div class="mr-2">
                                <img class="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/${student.roll_no}.jpg" alt="${student.name}"/>
                            </div>
                            <span>${student.name}</span>
                        </div>
                    </td>
                    <td class="py-3 px-6 text-center">${student.roll_no}</td>
                    <td class="py-3 px-6 text-center">Math: ${student.marks.math}, Science: ${student.marks.science}, English: ${student.marks.english}</td>
                    <td class="py-3 px-6 text-center">
                        <div class="flex item-center justify-center">
                            <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                            </div>
                            <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </div>
                        </div>
                    </td>
                </tr>
            `;
    });

    content.innerHTML = `<!-- TABLE -->
                  <div class="bg-white shadow rounded-sm my-2.5 overflow-x-auto">
                      <table class="min-w-max w-full table-auto">
                          <thead>
                              <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                  <th class="py-3 px-6 text-left">Class</th>
                                  <th class="py-3 px-6 text-left">Teacher Name</th>
                                  <th class="py-3 px-6 text-center">Roll No.</th>
                                  <th class="py-3 px-6 text-center">Marks</th>
                                  <th class="py-3 px-6 text-center">Actions</th>
                              </tr>
                          </thead>
                            <tbody class="text-gray-600 text-sm">
                          ${tableRows}
                      </tbody>
                      </table>
                  </div>
                  <!-- END OF TABLE -->`;
  });
});

// Admin

function AdminFun() {
  // admin-login.js
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Example of simple authentication (replace with server-side validation in production)
    if (username === "Ramesh" && password === "12345") {
      window.location.href = "index.html";
    } else {
      alert("Invalid credentials. Please try again.");
    }
  });
}

AdminFun();
