import java.util.*;
class Main{
    static int orig[] = {0, 0, 0, 0}, ans = 0;
    public static void main (String[] args) {
        Scanner sc = new Scanner(System.in);
        String s[] = sc.nextLine().split(" ");
        int n = s.length, traps[][] = new int[n][4];
        for(int i = 0; i < n; i++){
            for(int j = 0; j < 4; j++) traps[i][j] = Integer.parseInt("" + s[i].charAt(j));
        }
        int lock[] = new int[4];
        String l = sc.nextLine();
        for(int i = 0; i < 4; i++) lock[i] = Integer.parseInt("" + l.charAt(i));
        Queue<int[]> q = new LinkedList<>();
        List<int[]> check = new ArrayList<>();
        check.add(new int[]{0, 0, 0, 0});
        q.offer(new int[]{0, 0, 0, 0});
        while(!q.isEmpty()){
            int[] polled = q.poll();
            check.add(polled);
            System.out.println(Arrays.toString(polled));
            if(compare(polled, lock)){
                System.out.println(ans);
                return;
            }
            boolean f = false;
            for(int[] t: traps){
                if(compare(t, polled)){
                    f = true;
                    break;
                }
            }
            if(f) continue;
            ans++;
            for(int i = 0; i < 4; i++){
                int prev = polled[i], p[] = polled.clone(); 
                p[i] = (prev + 1) % 10;
                if(!check.contains(p)){
                    q.offer(p);
                }
                p[i] = (prev + 9) % 10;
                if(!check.contains(p)){
                    q.offer(p);
                }
            }
        }
        System.out.println(-1);
    }
    static boolean compare(int[] x, int[] y){
        for(int i = 0; i < 4; i++) if(x[i] != y[i]) return false;
        return true;
    }
}