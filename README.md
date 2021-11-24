Problem Statement :
The tasks should be picked only when the servers are present. For e.g.: - If we add 3 servers and 5 tasks, then only the first 3 tasks should start executing, the remaining should be waiting. Once those finish, the next 2 can be picked up by the servers and start executing. After everything is done, the server should be in IDLE mode, waiting for any new tasks to be created.
